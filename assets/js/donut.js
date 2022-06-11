// @ts-check

export class Donut {
  b = [];
  z = [];
  A = 1;
  B = 1;
  x0 = 30;
  y0 = 12;
  vj = 0.07;
  vi = 0.03;

  render() {
    this.A += 0.035;
    this.B += 0.015;
    let cA = Math.cos(this.A),
      sA = Math.sin(this.A),
      cB = Math.cos(this.B),
      sB = Math.sin(this.B);
    for (let k = 0; k < 1760; k++) {
      this.b[k] = k % 80 == 79 ? "\n" : " ";
      this.z[k] = 0;
    }
    for (let j = 0; j < 6.28; j += this.vj) {
      let ct = Math.cos(j),
        st = Math.sin(j);
      for (this.i = 0; this.i < 6.28; this.i += this.vi) {
        let sp = Math.sin(this.i),
          cp = Math.cos(this.i),
          h = ct + 2,
          D = 1 / (sp * h * sA + st * cA + 5),
          t = sp * h * cA - st * sA;
        let x = 0 | (this.x0 + 30 * D * (cp * h * cB - t * sB)),
          y = 0 | (this.y0 + 15 * D * (cp * h * sB + t * cB)),
          o = x + 80 * y,
          N = 0 | (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));
        if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > this.z[o]) {
          this.z[o] = D;
          this.b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
        }
      }
    }
    return this.b.join("");
  }
}
