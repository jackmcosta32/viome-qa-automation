const PRODUCT_ADDONS = {
  LOZENGES: "Oral Lozenges",
  SUPPLEMENTS: "Precision Supplements",
  PROBIOTICS: "Probiotics + Prebiotics",
};

describe("product page", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", () => {
      return false;
    });

    cy.visit("/products/full-body-health-solutions-exp010", {});
  });

  context("when the user is attempting to purchase a test kit...", () => {
    it("should display an upsell modal", () => {});

    it("should be able to add more than one test kit to the cart", () => {});

    it("should be possible to fulfill the purchase with the test kit", () => {});

    it("should be possible to change the selected test kit to a subscription", () => {});
  });

  context("when the user is attempting to purchase a subscription...", () => {
    it("should prevent multiple subscriptions from being added to the cart", () => {});

    it("should be possible to fulfill the purchase", () => {});
  });
});
