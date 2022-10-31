const nato = {
    a: "Alfa",
    b: "Bravo",
    c: "Charlie",
    d: "Delta",
    e: "Echo",
    f: "Foxtrot",
    g: "Golf",
    h: "Hotel",
    i: "India",
    j: "Juliett",
    k: "Kilo",
    l: "Lima",
    m: "Mike",
    n: "November",
    o: "Oscar",
    p: "Papa",
    q: "Quebec",
    r: "Romeo",
    s: "Sierra",
    t: "Tango",
    u: "Uniform",
    v: "Victor",
    w: "Whiskey",
    x: "Xray",
    y: "Yankee",
    z: "Zulu"
};

function toNato(str) {
    let mot = '';
    for (let i = 0; i < str.length; i++) {
        switch (str.charAt(i)) {
            case '.':
                mot += '.';
                break;
            case '!':
                mot += '!';
                break;
            case '?':
                mot += '?';
                break;
            case ';':
                mot += ';';
                break;
            case ':':
                mot += ':';
                break;
            case ',':
                mot += ',';
                break;
            case 'a':
            case 'A':
                mot += nato.a;
                break;
            case 'b':
            case 'B':
                mot += nato.b;
                break;
            case 'c':
            case 'C':
                mot += nato.c;
                break;
            case 'd':
            case 'D':
                mot += nato.d;
                break;
            case 'e':
            case 'E':
                mot += nato.e;
                break;
            case 'f':
            case 'F':
                mot += nato.f;
                break;
            case 'g':
            case 'G':
                mot += nato.g;
                break;
            case 'h':
            case 'H':
                mot += nato.h;
                break;
            case 'i':
            case 'I':
                mot += nato.i;
                break;
            case 'j':
            case 'J':
                mot += nato.j;
                break;
            case 'k':
            case 'K':
                mot += nato.k;
                break;
            case 'l':
            case 'L':
                mot += nato.l;
                break;
            case 'm':
            case 'M':
                mot += nato.m;
                break;
            case 'n':
            case 'N':
                mot += nato.n;
                break;
            case 'o':
            case 'O':
                mot += nato.o;
                break;
            case 'p':
            case 'P':
                mot += nato.p;
                break;
            case 'q':
            case 'Q':
                mot += nato.q;
                break;
            case 'r':
            case 'R':
                mot += nato.r;
                break;
            case 's':
            case 'S':
                mot += nato.s;
                break;
            case 't':
            case 'T':
                mot += nato.t;
                break;
            case 'u':
            case 'U':
                mot += nato.u;
                break;
            case 'v':
            case 'V':
                mot += nato.v;
                break;
            case 'w':
            case 'W':
                mot += nato.w;
                break;
            case 'x':
            case 'X':
                mot += nato.x;
                break;
            case 'y':
            case 'Y':
                mot += nato.y;
                break;
            case 'z':
            case 'Z':
                mot += nato.z;
                break;
        }
    }
    return mot;
}


module.exports = toNato;

