class Personal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.created = new Date();
	}
}

class Application extends Personal {
	constructor(name, age, created) {
		super(name, age, created);
		this.write();
	}
	write() {
		setTimeout(() => {
			console.log(`Date => ${this.created}`);
			for (let i = 1989; i <= 2021; i++) {
				console.log(`Geçen Yıllar - ${i} -`);
			}
		}, 1000);
		console.log(`Writing => ${this.name}, Yaş => ${this.age}`);
	}
}

new Application('Taner', 32);