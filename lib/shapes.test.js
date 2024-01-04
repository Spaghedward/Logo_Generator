const { Square, Circle, Triangle } = require("./shapes")


describe('Square', () => {
    it('should create a custom square logo based on user inputs', () => {
        const shape = new Square('blue', 'GEJ', 'black');
        expect(shape.render()).toEqual(`
        <svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
         <rect width="300" height="200" fill="blue" />
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">GEJ</text>
        </svg>`
        );
    });
});

describe('Circle', () => {
    it('should create a custom circle logo based on user inputs', () => {
        const shape2 = new Circle('blue', 'GEJ', 'black');
        expect(shape2.render()).toEqual(`
        <svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
         <circle cx="150" cy="100" r="80" fill="blue" />
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">GEJ</text>
        </svg>`
        );
    });
});

describe('Triangle', () => {
    it('should create a custom triangle logo based on user inputs', () => {
        const shape3 = new Triangle('blue', 'GEJ', 'black');
        expect(shape3.render()).toEqual(`
        <svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
         <polygon points="100, 15 200, 200 0, 200" fill="blue"/>
         <text x="100" y="185" font-size="60" text-anchor="middle" fill="black">GEJ</text>
        </svg>`
        );
    });
});