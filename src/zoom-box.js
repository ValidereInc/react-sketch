/*eslint no-unused-vars: 0*/

import FabricCanvasTool from './fabrictool'

class ZoomBox extends FabricCanvasTool {

  configureCanvas(props) {
    let canvas = this._canvas;
    canvas.isDrawingMode = false;
    canvas.selection = true;
    canvas.forEachObject((o) => {
      o.selectable = o.evented = false;
    });

    this.pan = props.pan;
    this.onZoomBoxRelease = props.onZoomBoxRelease;
  }

  doMouseDown(o) {
    let canvas = this._canvas;
    this.isDown = true;
    let pointer = canvas.getPointer(o.e, true);
    this.startX = pointer.x;
    this.startY = pointer.y;
  }

  doMouseUp(o) {
    this.isDown = false;

    let canvas = this._canvas;
    let pointer = canvas.getPointer(o.e, true);

    console.table({
      upperLeft: `(${this.startX}, ${this.startY})`,
      bottomRight: `(${pointer.x}, ${pointer.y})`
    });

    if (this.onZoomBoxRelease) {
      const leftX = Math.min(this.startX, pointer.x);
      const rightX = Math.max(this.startX, pointer.x);
      const upperY = Math.min(this.startY, pointer.y);
      const bottomY = Math.max(this.startY, pointer.y);

      this.onZoomBoxRelease(this.pan.x + leftX, this.pan.x +  rightX, this.pan.y + upperY, this.pan.y + bottomY);
    }
  }
}

export default ZoomBox