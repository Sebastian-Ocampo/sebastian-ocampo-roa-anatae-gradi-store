import { $Q, $Qll } from "../utils/query-selector";
import { queryVariants } from "./variants-change";

/**
 * variantOnChange
 * Adds the functionality in the variant selection group
 * 
 * @param {String} component - It is the reference in the dome of all input-selector (variant selection) groups by product 
 * @returns Iterator function on each input-selector
 */
export const variantOnChange = (component) => {
  const parents = $Qll(component);

  if (parents.length > 1) {
    return parents.forEach(
      parent => {
        iterationOptions(parent)
      }
    );
  }

  return iterationOptions(parents[0])
}

/**
 * iterationOptions
 * Detects a change of state on each option selector
 * 
 * @param {HTMLElement} parent - Dom element parent of all seletors options
 * @returns Iteration of all selector
 */
function iterationOptions (parent) {
  return options(parent).forEach(option => {
    option.addEventListener(
      'change',
      (e) => {
        selectVariant(parent);
        queryVariants(e);
      }
    );
  });
}

/**
 * selectVariant
 * Searches for a selected variant in an object stored in the DOM (input[id="variants"])
 * 
 * @param {HTMLElement} parent - Dom element parent of all seletors options
 * @returns Replacement of id in the dom (on input[name="id"])
 */
function selectVariant (parent) {
  let variantName = optionsChecked(parent);
  let variants = JSON.parse($Q('#variants', parent).value);

  const variantFilter = variants.filter(
    variant => variant.title == variantName
  )

  $Q('[name="id"]', parent).value = variantFilter[0].id
}

/**
 * optionChecked
 * Iterates and searches for the options that were selected
 * 
 * @param {HTMLElement} parent - Dom element parent of all seletors options
 * @returns A variant name - string reference
 */
function optionsChecked (parent) {
  let myOptions = [];

  options(parent).forEach(
    option => {
      if(option.type == "radio") {
        if (option.checked == true) {
          myOptions = [...myOptions, option.value]
        }
      } else {
        myOptions = [...myOptions, option.value]
      }
    }
  )
  return buildOption(myOptions);
}

/**
 * @param {HTMLElement} parent - Dom element parent of all seletors options
 * @returns Array of nodes
 */
const options = (parent) => $Qll('.js-option', parent);

/**
 * @param {Array} options - Array of option names
 * @returns separate options with "/"
 */
const buildOption = (options) => options.join(' / ');