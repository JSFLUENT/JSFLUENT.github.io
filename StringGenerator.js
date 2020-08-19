class StringGenerator {
    string = [];
    n;
    datatype;
    strings = [
        '"a"', '"b"', '"c"', '"d"', '"e"', '"f"', '"g"', '"h"',
        '"i"', '"j"', '"k"', '"l"', '"m"', '"n"', '"o"', '"p"',
        '"q"', '"r"', '"s"', '"t"', '"u"', '"v"', '"w"', '"x"',
        '"y"', '"z"', '"A"', '"B"', '"C"', '"D"', '"E"', '"F"',
        '"G"', '"H"', '"I"', '"J"', '"K"', '"L"', '"M"', '"N"',
        '"O"', '"P"', '"Q"', '"R"', '"S"', '"T"', '"U"', '"V"',
        '"W"', '"X"', '"Y"', '"Z"'
    ];
    generate(n, datatype){

        this.n          = n;
        this.datatype   = datatype;

        for (let i = 0; i < n; i++) this.string += this.strings[Math.round(this.strings.length*Math.random())]

        return this;
    }
}