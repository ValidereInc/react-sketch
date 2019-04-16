
import FabricCanvasTool from './fabrictool'

class Nothing extends FabricCanvasTool {

  configureCanvas(props) {
    this._canvas.isDrawingMode = false;
    this._canvas.selection = false;
  }
}

export default Nothing;