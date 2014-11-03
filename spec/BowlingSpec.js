describe("BowlingScoring", function(){
	var arr = [[1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5], [1,5] ];

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

	describe("smthg", function(){
		it("should return at least sum of arguments", function(){
			expect(bowlingScoring(arr)).not.toBeLessThan(60);
		});
	});
});