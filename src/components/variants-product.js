import { $Q, $Qll } from "../utils/query-selector"

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

function iterationOptions (parent) {
  return options(parent).forEach(option => {
    option.addEventListener(
      'change',
      () => {
        selectVariant(parent)
      }
    );
  });
}

function selectVariant (parent) {
  let variantName = optionsChecked(parent);
  let variants = JSON.parse($Q('#variants', parent).value);

  const variantFilter = variants.filter(
    variant => variant.title == variantName
  )

  $Q('[name="id"]', parent).value = variantFilter[0].id
}

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

const options = (parent) => $Qll('.js-option', parent);
const buildOption = (options) => options.join(' / ');