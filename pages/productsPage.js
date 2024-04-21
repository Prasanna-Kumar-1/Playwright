import BasePage from "./basePage";
import testData from "../data/testData.json";
import {
  appLogo,
  landingPageTitle,
  landingPageImage,
  burgerMenuBtn,
  burgerCrossButton,
  allItemsSideBarLink,
  aboutSideBarLink,
  logoutSideBarLink,
  resetSideBarLink,
  shoppingCartLink,
  productSortContainer,
  inventoryContainer,
  backPackImage,
  backPackName,
  backPackText,
  backPackPrice,
  backPackAddToCartBtn,
  boltTshirtImage,
  boltTshirtName,
  boltTshirtText,
  boltTshirtPrice,
  boltTshirtAddToCartBtn,
  onesieImage,
  onesieName,
  onesieText,
  onesiePrice,
  onesieAddToCartBtn,
  bikeLightImage,
  bikeLightName,
  bikeLightText,
  bikeLightPrice,
  bikeLightAddToCartBtn,
  fleeceJacketImage,
  fleeceJacketname,
  flecceJacketText,
  fleeceJacketPrice,
  fleeceJacketAddToCartBtn,
  tshirtRedImage,
  tshirtRedName,
  tshirtRedText,
  tshirtRedPrice,
  tshirtRedAddToCartBtn,
  listOfElements,
  footerText,
  twitterLink,
  facebookLink,
  linkedInLink,
  removeButton,
  addtoCartBtnAll,
} from "../pageobjects/productsPage";

class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async isShopingCartLinkVisible() {
    return await this.isElementVisible(
      shoppingCartLink,
      testData.notVisibleText
    );
  }

  async isProductSortContainerVisible() {
    return await this.isElementVisible(
      productSortContainer,
      testData.notVisibleText
    );
  }
}

export default ProductsPage();
