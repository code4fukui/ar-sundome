import { Material } from 'https://immersive-web.github.io/webxr-samples/js/render/core/material.js';

const COLOR_R = 1;
const COLOR_G = .1;
const COLOR_B = .1;
const COLOR_ALPHA = .85;
const BUTTON_HOVER_COLOR = 0.9;
const BUTTON_HOVER_ALPHA = 1.0;
const BUTTON_HOVER_SCALE = 1.1;

export class CubeMaterial extends Material {
  constructor() {
    super();

    this.state.blend = true;

    this.defineUniform('hoverAmount', 0);
  }

  get materialName() {
    return 'BUTTON_MATERIAL';
  }

  get vertexSource() {
    return `
    attribute vec3 POSITION;
    uniform float hoverAmount;
    vec4 vertex_main(mat4 proj, mat4 view, mat4 model) {
      float scale = mix(1.0, ${BUTTON_HOVER_SCALE}, hoverAmount);
      vec4 pos = vec4(POSITION.x * scale, POSITION.y * scale, POSITION.z * (scale + (hoverAmount * 0.2)), 1.0);
      return proj * view * model * pos;
    }`;
  }

  get fragmentSource() {
    return `
    uniform float hoverAmount;
    const vec4 default_color = vec4(${COLOR_R}, ${COLOR_G}, ${COLOR_B}, ${COLOR_ALPHA});
    const vec4 hover_color = vec4(${BUTTON_HOVER_COLOR}, ${BUTTON_HOVER_COLOR},
                                  ${BUTTON_HOVER_COLOR}, ${BUTTON_HOVER_ALPHA});
    vec4 fragment_main() {
      return mix(default_color, hover_color, hoverAmount);
    }`;
  }
}
