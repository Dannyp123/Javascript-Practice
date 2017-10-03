var basics = require('./basics');

describe('basics.add', function() {
    test('2 + 2 should equal 4', function() {
        expect(basics.add(2, 2)).toEqual(4);
    });

    test('5 + -30 should be -25', function() {
        expect(basics.add(5, -30)).toEqual(-25);
    });
});

describe('basics.double', function() {
    test('double 10 should be 20', function() {
        expect(basics.double(10)).toEqual(20);
    });

    test('double -4 should be -8', function() {
        expect(basics.double(-4)).toEqual(-8);
    });
});

describe('basic.multThree', function() {
    test('multiplying 3, 5, and 7 should give 105', function() {
        expect(basics.multThree(3, 5, 7)).toEqual(105);
    });

    test('multiplying 100, -1, and -1 should be 100', function() {
        expect(basics.multThree(100, -1, -1)).toEqual(100);
    });
});

describe('basic.earnings', function() {
    test('100 A seats, 100 B seats, and 100 C seats should earn $3600 dollars', function() {
        expect(basics.earnings(100, 100, 100)).toEqual(3600);
    });
    test('50 A seats, 75 B seats, and 100 C seats should earn $2550 dollars', function() {
        expect(basics.earnings(50, 75, 100)).toEqual(2550);
    });
    test('0 A seats, 1000 B seats, and 79 C seats should earn $12711 dollars', function() {
        expect(basics.earnings(0, 1000, 79)).toEqual(12711);
    });
});

describe('basics.both', function() {
    test('true and false is false', function() {
        expect(basics.both(true, false)).toEqual(false);
    });

    test('true and true is false', function() {
        expect(basics.both(true, true)).toEqual(true);
    });

    test('false and false is false', function() {
        expect(basics.both(false, false)).toEqual(false);
    });

    test('false and true is false', function() {
        expect(basics.both(false, true)).toEqual(false);
    });
});

describe('basics.walkOrDrive', function() {
    test('.2 miles and nice weather means you should walk', function() {
        expect(basics.walkOrDrive(0.2, true)).toEqual('walk');
    });
    test('.2 miles and bad weather means you should drive', function() {
        expect(basics.walkOrDrive(0.2, false)).toEqual('drive');
    });
    test('.3 miles and nice weather means you should drive', function() {
        expect(basics.walkOrDrive(0.3, true)).toEqual('drive');
    });
    test('.3 miles and bad weather means you should drive', function() {
        expect(basics.walkOrDrive(0.3, false)).toEqual('drive');
    });
});

describe('howPopulated', function() {
    test('howPopulated(100, 1) should equal Sparsely Populated', function() {
        expect(basics.howPopulated(100, 1)).toEqual('Sparsely Populated');
    });
    test('howPopulated(101, 1) should equal Densely Populated', function() {
        expect(basics.howPopulated(101, 1)).toEqual('Densely Populated');
    });
    test('howPopulated(1000, 10) should equal Sparsely Populated', function() {
        expect(basics.howPopulated(1000, 10)).toEqual('Sparsely Populated');
    });
    test('howPopulated(1001, 10) should equal Densely Populated', function() {
        expect(basics.howPopulated(1001, 10)).toEqual('Densely Populated');
    });
});

describe('basics.goldStars', function() {
    test('900 points should yield 1 gold stars', function() {
        expect(basics.goldStars(900)).toEqual('*');
    });
    test('1900 points should yield 2 gold stars', function() {
        expect(basics.goldStars(1900)).toEqual('**');
    });
    test('7999 points should yield 3 gold stars', function() {
        expect(basics.goldStars(7999)).toEqual('***');
    });
    test('9001 points should yield 4 gold stars', function() {
        expect(basics.goldStars(9001)).toEqual('****');
    });
    test('1234567 points should yield 5 gold stars', function() {
        expect(basics.goldStars(1234567)).toEqual('*****');
    });
});

describe('basics.howManyPoints', function() {
    test('extra kick should yield 1 points', function() {
        expect(basics.howManyPoints('extra kick')).toEqual(1);
    });
    test('extra conv should yield 2 points', function() {
        expect(basics.howManyPoints('extra conv')).toEqual(2);
    });
    test('safety should yield 2 points', function() {
        expect(basics.howManyPoints('safety')).toEqual(2);
    });
    test('fg should yield 3 points', function() {
        expect(basics.howManyPoints('fg')).toEqual(3);
    });
    test('td should yield 6 points', function() {
        expect(basics.howManyPoints('td')).toEqual(6);
    });
});
