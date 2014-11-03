describe("BowlingScoring", function(){
	var arr = [[1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5] ];
	var withStrike = [[10], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5]];
	var withDouble = [[1, 0], [10], [10], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5]];
	var withTriple = [[1, 0], [10], [10], [10], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5]];

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
			expect(bowlingScoring(withDouble)).toEqual(85);
		});
	});

});