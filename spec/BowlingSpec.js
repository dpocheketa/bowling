describe("BowlingScoring", function(){
	var arr = [[1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5] ];
	var withStrike = [[10], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5]];
	var withDouble = [[1, 0], [10], [10], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5]];
	var withTriple = [[1, 0], [10], [10], [10], [0,0], [1,5], [1,5], [1,5], [1,5], [1,5]];
	var withSpare = [[1, 0], [10], [10], [10], [0,0], [5,5], [3,5], [1,5], [1,5], [1,5]];
	var lastFrame = [[1, 0], [10], [10], [10], [0,0], [5,5], [3,5], [1,5], [1,5], [5,5,6]];
	var allShouted = [[10],[10],[10],[10],[10],[10],[10],[10],[10],[10, 10, 10]];


	it("should be defined", function(){
		expect(bowlingScoring).toBeDefined();
	});

	describe("output format", function(){
		it("should return a number", function(){
			expect(bowlingScoring(arr)).toEqual(jasmine.any(Number));
		});
	});

	describe("incorect input", function(){
		it("should throw error when incorect input", function(){
			expect(function(){bowlingScoring(false)}).toThrow();
		});
	});

	describe("minimal sum", function(){
		it("should return at least sum of arguments", function(){
			expect(bowlingScoring(arr)).not.toBeLessThan(60);
		});

		it("should return at least sum of arguments", function(){
			expect(bowlingScoring(withStrike)).not.toBeLessThan(60);
		});

		it("should return at least sum of arguments", function(){
			expect(bowlingScoring(withDouble)).not.toBeLessThan(60);
		});

		it("should return at least sum of arguments", function(){
			expect(bowlingScoring(withTriple)).not.toBeLessThan(60);
		});
	});

	describe("sum with strike", function(){
		it("should return correct sum if strike is shouted", function(){
			expect(bowlingScoring(withStrike)).toEqual(70);
		});
	});

	describe("sum with double", function(){
		it("should return correct sum if double is shouted", function(){
			expect(bowlingScoring(withDouble)).toEqual(80);
		});
	});

	describe("sum with triple", function(){
		it("should return correct sum if triple is shouted", function(){
			expect(bowlingScoring(withTriple)).toEqual(91);
		});
	});

	describe("sum with spare", function(){
		it("should return correct sum if spare is shouted", function(){
			expect(bowlingScoring(withSpare)).toEqual(100);
		});
	});

	describe("last frame with 3 shouts", function(){
		it("should return correct sum if in last frame we have 3 shouts", function(){
			expect(bowlingScoring(lastFrame)).toEqual(110);
		});
	});

	describe('all shouted', function(){
		it("should return max sum when max is shouted", function(){
			expect(bowlingScoring(allShouted)).toEqual(300);
		});
	});

});