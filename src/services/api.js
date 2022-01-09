import axios from 'axios';

/**
* Client for the Shopify API
*/
class API {

  /**
  * Add products to cart
  * @param {{
  *   items: object,
  *   sections: string,
  * }} config  – Contains the products to add,
  * the quantity and section to update
  * @returns {object} Line items associated with the added items and sections
  */
  async addToCart({ items, sections = undefined }) {
    let formData = {
      items: items,
    };

    //Support bundled section rendering
    if (sections) {
      formData.sections = sections;
    }

    try {
      const { data } = await axios({
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        url: `${routes.cart_add_url}.js`,
        data: JSON.stringify(formData),
      });
      return data;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }

  /**
  * Update the cart's line item quantities
  * @param {{
  *   id: number,
  *   quantity: number,
  *   sections: string
  * }} config – Contains the product variant,
  * the quantity and section to update
  */
  async updateCart({
    id,
    quantity,
    sections = undefined,
  }) {

    let formData = {
      updates: {
        [id]: quantity,
      }
    };

    //Support bundled section rendering
    if (sections) {
      formData.sections = sections;
    }

    try {
      const { data } = await axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        url: `${routes.cart_update_url}.js`,
        data: JSON.stringify(formData),
      });
      return data;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }

  /**
  * Render up to five sections with the use of Section Rendering API
  * @param {string} sections – section IDs
  * @returns {object} Includes pairs for each section ID and its
  * corresponding rendered HTML
  */
  async renderShopifySection(sections) {
    try {
      const {
        data: html
      } = await axios.get(`?sections=${sections}`);
      return html;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }

  /**
  * It is used to recommend related products for a specific product
  * @param {{
  *   id: number,
  *   limit: number,
  *   sectionId: string
  * }} config – Product ID on which the recommendation will be based,
  * the result limit and the section with which the recommended
  * products will be rendered
  * @returns {object} Array with the recommended products or, if the section ID
  * is supplied, HTML from a section rendered with product recommendations
  */
  async getRecommendedProducts({ id, limit, sectionId = undefined }) {
    try {
      let url;
      if (sectionId) {
        //Support section rendering
        url = `/recommendations/products?section_id=${sectionId}&product_id=${id}&limit=${limit}`;
      } else {
        url = `/recommendations/products.json?product_id=${id}&limit=${limit}`;
      }
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }

  /**
  * Get data from a resource
  * @param {string} url – The path of the resource to obtain
  * @returns {object} Data from a resource
  */
  async read(url) {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
}

export default new API();
