class LoopGenerator {
    code="";
    initial;
    limiter;
    incrementor;
    generateBasic(){

        let codeBlock;

        this.initial = Math.round(Math.random() * 100);
        let Nlimiter = Math.round(Math.random() * 100);
        let Nincrementor = Math.ceil(Math.random() * 10);

        this.limiter = (Nlimiter > this.initial)?`i < ${Nlimiter}`:`i > ${Nlimiter}`;
        this.incrementor = (Nlimiter > this.initial)?`i += ${Nincrementor}`:`i -= ${Nincrementor}`;

        codeBlock = `console.log(i)`;
        
        this.code = `for (let i = ${this.initial}; ${this.limiter}; ${this.incrementor}) {
            ${codeBlock};
        }`;        
        return this;
    }
}