
describe("KickerApp", function() {
  beforeEach(function() {
    return this.app = new KickerApp();
  });
  it("should be an instance of KickerApp", function() {
    return expect(this.app).to.be["instanceof"](KickerApp);
  });
  it("should be defined", function() {
    return expect(this.app).to.exist;
  });
  return it("should have an init function", function() {
    return expect(this.app).to.respondTo('init');
  });
});
;
describe("KickerApp.Games", function() {
  beforeEach(function() {
    return this.app = new KickerApp.Games();
  });
  it("should be an instance of KickerApp", function() {
    return expect(this.app).to.be["instanceof"](KickerApp.Games);
  });
  it("should be defined", function() {
    return expect(this.app).to.exist;
  });
  return it("should have an init function", function() {
    return expect(this.app).to.respondTo('init');
  });
});
