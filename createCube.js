import { BoxBuilder } from "https://immersive-web.github.io/webxr-samples/js/render/geometry/box-builder.js";
import { PrimitiveStream } from "https://immersive-web.github.io/webxr-samples/js/render/geometry/primitive-stream.js";
import { Node } from "https://immersive-web.github.io/webxr-samples/js/render/core/node.js";
import { CubeMaterial } from "./CubeMaterial.js";

export const createCube = (renderer, pos, size) => {
  const stream = new PrimitiveStream();
  const boxbuilder = new BoxBuilder(stream);
  boxbuilder.pushCube(pos, size);
  const primitive = boxbuilder.finishPrimitive(renderer);
  const rprim = renderer.createRenderPrimitive(primitive, new CubeMaterial());
  const node = new Node();
  node.addRenderPrimitive(rprim);
  return node;
};
