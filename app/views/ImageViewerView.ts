import { BodyNode, el, View } from "@commonmodule/app";
import { ImageViewer } from "@commonmodule/app-components";

export default class ImageViewerView extends View {
  constructor() {
    super();
    this.container = el(".image-viewer-view", "Image Viewer Showcase").appendTo(
      BodyNode,
    );

    new ImageViewer({
      images: [{
        imageUrl: "https://yavuzceliker.github.io/sample-images/image-1.jpg",
        thumbnailUrl:
          "https://yavuzceliker.github.io/sample-images/image-1.jpg",
      }, {
        imageUrl: "https://yavuzceliker.github.io/sample-images/image-2.jpg",
        thumbnailUrl:
          "https://yavuzceliker.github.io/sample-images/image-2.jpg",
      }, {
        imageUrl: "https://yavuzceliker.github.io/sample-images/image-3.jpg",
        thumbnailUrl:
          "https://yavuzceliker.github.io/sample-images/image-3.jpg",
      }, {
        imageUrl: "https://yavuzceliker.github.io/sample-images/image-4.jpg",
        thumbnailUrl:
          "https://yavuzceliker.github.io/sample-images/image-4.jpg",
      }, {
        imageUrl: "https://yavuzceliker.github.io/sample-images/image-5.jpg",
        thumbnailUrl:
          "https://yavuzceliker.github.io/sample-images/image-5.jpg",
      }],
      initialIndex: 0,
    });
  }
}
