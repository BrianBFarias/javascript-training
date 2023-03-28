/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const NachoBag = new Backpack("mumba", 23, "blue", 13, 14, 15, true);
console.log(NachoBag);

const HowToLiveFast = new Book("Part_one", 87, "Wiggy");
console.log(HowToLiveFast);

const HowToLiveSlow = new Book("Sequel", 69, "Wiggy");
console.log(HowToLiveSlow);

const WakaWaka = new Book("Uprising", 38, "Joe");
console.log(WakaWaka);

const BobTheBuilder = new Book("NachoBusiness", 396, "Deemin");
console.log(BobTheBuilder);
