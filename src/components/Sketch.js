function Sketch(p) {
  let x, y, r, g, b;
  
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  }

  p.draw = () => {
    r = p.random(255);
    b = p.random(255);
    g = p.random(255);
    x = p.random(p.width);
    y = p.random(p.height);
    p.noStroke();
    p.fill(r, g, b, 100);
    p.circle(x, y, 24);
  }
}

export default Sketch
