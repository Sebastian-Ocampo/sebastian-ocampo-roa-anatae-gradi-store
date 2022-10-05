// eslint-disable-next-line no-template-curly-in-string
const moneyFormat = "${{amount}}";

function defaultOption(opt, def) {
  return typeof opt === "undefined" ? def : opt;
}

/* eslint-disable no-param-reassign */
// eslint-disable-next-line max-params
function formatWithDelimiters(number, precision, thousands, decimal) {
  precision = defaultOption(precision, 2);
  thousands = defaultOption(thousands, ".");
  decimal = defaultOption(decimal, ",");

  if (isNaN(number) || number == null) {
    return 0;
  }

  number = (number / 100.0).toFixed(precision);

  const parts = number.split(".");
  const dollars = parts[0].replace(
    /(\d)(?=(\d\d\d)+(?!\d))/g,
    `$1${thousands}`,
  );
  const cents = parts[1] ? decimal + parts[1] : "";

  return dollars + cents;
}
/* eslint-enable no-param-reassign */

function caseHandler(element, cents) {
  let value = "";

  switch (element) {
    case "amount":
      value = formatWithDelimiters(cents, 2);
      break;
    case "amount_no_decimals":
      value = formatWithDelimiters(cents, 0);
      break;
    case "amount_with_comma_separator":
      value = formatWithDelimiters(cents, 2, ".", ",");
      break;
    case "amount_no_decimals_with_comma_separator":
      value = formatWithDelimiters(cents, 0, ".", ",");
      break;
    default:
      value = ""
  }
  return value
}

export const formatMoney = (cents, format) => {
  if (typeof cents === "string") {
     // eslint-disable-next-line no-param-reassign
     cents = cents.replace(".", "");
  }
  const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  const formatString = format || moneyFormat;

  const value = caseHandler(formatString.match(placeholderRegex)[1], cents)

  const price = formatString.replace(placeholderRegex, value);

  return `${price.replace("$", "€")} EUR`;
}
