/**
 * Returns title case for a string
 * @param {string} str
 * @return {string}
 */
export function toTitleCase(str: string) {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Returns birthdate in string
 * @param {string} date
 * @return {string}
 */
export function getBirthDateString(date: string) {
  const birthDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return birthDate.toLocaleDateString("en-US", options);
}

/**
 * Returns age from date
 * @param {string} date
 * @return {number}
 */
export function getAge(date: string) {
  const birthDate = new Date(date);
  const today = new Date();
  return today.getFullYear() - birthDate.getFullYear();
}

/**
 * Returns year from date
 * @param {string} date
 * @return {number}
 */
export function getYear(date: string) {
  const newDate = new Date(date);
  return newDate.getFullYear();
}

/**
 * Returns image caption from image url
 * @param {string} image
 * @return {string}
 */
export function getImageCaption(image: string): string {
  const urlObj = new URL(image);
  const fileName = urlObj.pathname.split("/").pop() || "";

  return decodeURIComponent(fileName)
    .replace(/\.\w+$/, "")
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/-/g, " ");
}
