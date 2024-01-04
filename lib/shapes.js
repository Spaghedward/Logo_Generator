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
    render() {
        `<svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
         <rect width="200" height="200" fill="${answers.shapeColor}" />
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.initials}</text>
         </svg>`
    };
};

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        `<svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
         <circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.initials}</text>
        </svg>`
    };

};

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        `<svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
         <polygon points="50 15, 100 100, 0 100" fill="${answers.shapeColor}">
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.initials}</text>
        </svg>`
    };
};



module.exports = Shapes;