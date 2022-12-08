class Persona{
	constructor(nome, cognome, eta, passioni){
		this.nome = nome;
		this.cognome = cognome;
		this.eta = eta;
		this.passioni = passioni;
		console.log(`ciao sono ${this.nome}`);
	};
};

class Insegnante extends Persona{
	constructor(nome, cognome, eta, passioni, materia){
		super(nome, cognome, eta, passioni);
		this.materia = materia;
	}
	get materia(){
		return this._materia;
	}
	set materia(nuovaMateria){
		this._materia = nuovaMateria;
	}
	riprendiAlunno(nomeAlunno){
		console.log(`Smetti di fare cosi ${nomeAlunno}`);
	}
};

const insegnante =  new Insegnante('Gianna', 'Locci', 54, ['Netflix', 'Gaming'], 'Storia');
console.log(insegnante.materia);
insegnante.materia = 'Matematica';
console.log(insegnante.materia);

insegnante.riprendiAlunno('Gianni');