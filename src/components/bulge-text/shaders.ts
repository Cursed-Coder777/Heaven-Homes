export const vertexShader = `
uniform vec2 uMouse;

varying vec2 vUv;

float circle(vec2 uv, vec2 circlePosition, float radius) {
  float dist = distance(circlePosition, uv);
  return 1.0 - smoothstep(0.0, radius, dist);
}

float elevation(float radius, float intensity) {
  float circleShape = circle(vUv, (uMouse * 0.5) + 0.5, radius);
  return circleShape * intensity;
}

void main() {
  vUv = uv;
  vec3 newPosition = position;
  newPosition.z += elevation(0.2, 0.7);
  newPosition.z += sin(vUv.x * 25.0 + vUv.y * 10.0) * 0.01;
  newPosition.z += sin(vUv.y * 20.0 - vUv.x * 15.0) * 0.008;

  csm_Position = newPosition;
}
`;

export const fragmentShader = `
uniform sampler2D uTexture;
varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float weave(vec2 uv) {
  float scale = 80.0;
  vec2 suv = uv * scale;
  float threadX = abs(sin(suv.x * 3.14159));
  float threadY = abs(sin(suv.y * 3.14159));
  float mask = step(0.5, fract(floor(suv.x) + floor(suv.y)));
  float thread = mix(threadX, threadY, mask);
  return smoothstep(0.15, 0.6, thread);
}

void main() {
  vec4 textColor = texture2D(uTexture, vUv);

  float fuzz = hash(floor(vUv * 500.0)) * 0.04;
  float fabric = weave(vUv);

  vec3 fabricColor = vec3(0.10, 0.08, 0.06) + fuzz;
  fabricColor += vec3(0.025) * fabric;

  vec3 finalColor = mix(fabricColor, textColor.rgb, textColor.a);
  finalColor += fuzz * textColor.a * 0.15;
  finalColor += vec3(0.015) * (1.0 - fabric) * textColor.a * 0.5;

  csm_DiffuseColor = vec4(finalColor, 1.0);
}
`;
