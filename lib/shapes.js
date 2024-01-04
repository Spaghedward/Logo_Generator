class Shape {
    constructor(shape, shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    };
};

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
}
;
class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
};

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
};

module.exports = Shapes;