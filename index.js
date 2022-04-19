const SIZE_BLOCK = 40;

// механика игры
const game = {
	area: [
		['o','o','o','o','o','o','o','o','o','o',],
		['o','o','o','o','o','o','o','o','o','o',],
		['o','o','o','o','o','o','o','o','o','o',],
		['o','o','o','o','o','o','o','o','o','o',],
		['o','o','o','o','o','o','o','o','o','o',],
		['o','o','o','o','o','o','o','o','o','o',],
		['o','o','o','o','o','o','o','o','o','o',],
		['o','o','o','o','o','o','o','o','o','o',],
		['o','o','o','o','o','o','o','o','o','o',],
		['o','o','o','o','o','o','o','o','o','o',],
		['o','o','o','o','o','o','o','o','o','o',],
		['o','o','o','o','o','o','o','o','o','o',],
		['o','o','o','o','o','o','o','o','o','o',],
		['o','o','o','o','o','o','o','o','o','o',],
		['o','o','o','o','o','o','0','0','0','0',],
		['o','o','o','o','o','o','o','o','o','o',],
		['o','o','o','o','o','o','o','o','o','o',],
		['x','o','o','o','o','o','o','o','o','o',],
		['x','o','o','o','x','x','o','o','o','x',],
		['x','o','o','o','x','x','o','o','x','x',],
	],
	// методы для движения фигур
	activeTetromino: {
		x: 3,
		y: 0,
		block: [
			['o', 'x', 'o',],
			['o', 'x', 'o',],
			['x', 'x', 'o',],
		]
	},
	moveLeft() {
		this.activeTetromino.x -= 1;
		// game.activeTetromino.x = game.activeTetromino.x - 1;
	},
	moveRight() {
		this.activeTetromino.x += 1;
	},
	moveDown() {
		this.activeTetromino.y += 1;
	},
	retateTetromino() {
	
	},
	get viewArea() {
		const area = JSON.parse(JSON.stringify(this.area));
		const {x, y, block} = this.activeTetromino;

		// console.log(area);
		for(let i = 0; i < block.length; i++) {
			const row = block[i];
			// console.log('row: ', row);
			for(let j = 0; j < row.length; j++) {
				if (row[j] === 'x') {
					area[y + i][x + j] = block[i][j];
				}
				// console.log('row[j]: ', row[j]);
			}
		}
		// console.log(area);
		return area;
	}
};

// game.viewArea();
// console.log(game.activeTetromino);

// отрисовка
const container = document.querySelector('.container');
// console.log('container: ', container);

const canvas = document.createElement('canvas');
canvas.classList.add('game-area');
container.append(canvas);
canvas.width = SIZE_BLOCK * 10;
canvas.height = SIZE_BLOCK * 20;

const context = canvas.getContext('2d');

const showArea = area => {
	// console.log(area.length);
	for(let y = 0; y < area.length; y++) {
		const line = area[y];

		for (let x = 0; x < line.length; x++) {
			// console.log(line[x]);
			const block = line[x];
			if (block === 'x') {
				context.fillStyle ='blue';
				context.strokeStyle ='#e1def7';
				context.fillRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
				context.strokeRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
			}
		}
	}


	
};

showArea(game.viewArea);