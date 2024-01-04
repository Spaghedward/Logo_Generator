class Shape {
    constructor(shapeColor, initials, textColor) {
        this.shapeColor = shapeColor;
        this.initials = initials;
        this.textColor = textColor;
    };
};

class Square extends Shape {
    constructor(shapeColor, initials, textColor) {
        super(shapeColor, initials, textColor);
    };
    render() {
        return `
        <svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
         <rect width="300" height="200" fill="${this.shapeColor}" />
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>
        </svg>`
    };
};

class Circle extends Shape {
    constructor(shapeColor, initials, textColor) {
        super(shapeColor, initials, textColor);
    };
    render() {
        return `
        <svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
         <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>
        </svg>`
    };

};

class Triangle extends Shape {
    constructor(shapeColor, initials, textColor) {
        super(shapeColor, initials, textColor);
    };
    render() {
        return `
        <svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
         <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
         <text x="100" y="185" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>
        </svg>`
    };
};



module.exports = {Square, Circle, Triangle};