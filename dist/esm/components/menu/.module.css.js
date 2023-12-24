import n from"../../utils/styleInject.js";var e={menu:"-module_menu__pNyRa",menu__item:"-module_menu__item__Bi-9G",menu__dropdown:"-module_menu__dropdown__acppo",menu__dropdown_bg:"-module_menu__dropdown_bg__EYfC8",menu__container:"-module_menu__container__qxeOv",menu_open:"-module_menu_open__JnnO7",open:"-module_open__F5j3O",menu__button:"-module_menu__button__FGsc3"};n(".-module_menu__pNyRa {\n  position: relative;\n  display: flex;\n  align-items: center;\n  column-gap: 3em;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.-module_menu__item__Bi-9G {\n  position: relative;\n  height: 50px;\n  display: flex;\n  align-items: center;\n}\n.-module_menu__item__Bi-9G a {\n  color: inherit;\n  text-decoration: none;\n}\n.-module_menu__item__Bi-9G::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background-color: var(--color90, #323232);\n  bottom: 0.25em;\n  transform: scaleX(0);\n  transition: transform 0.25s ease-in-out;\n}\n.-module_menu__item__Bi-9G:hover::before {\n  transform: scaleX(1);\n}\n\n.-module_menu__dropdown__acppo {\n  position: absolute;\n  list-style: none;\n  top: 50px;\n  right: 0;\n  display: none;\n  grid-auto-flow: column;\n  gap: 3em;\n  justify-items: center;\n  z-index: 1;\n  white-space: nowrap;\n}\n.-module_menu__dropdown__acppo:last-of-type {\n  padding-right: 0;\n}\n@media screen and (min-width: 801px) {\n  .-module_menu__item__Bi-9G:hover .-module_menu__dropdown__acppo {\n    display: grid;\n  }\n}\n\n.-module_menu__dropdown_bg__EYfC8 {\n  display: none;\n  position: absolute;\n  top: 51px;\n  left: 0;\n  height: 50px;\n  width: 100%;\n  background-color: inherit;\n}\n@media screen and (min-width: 801px) {\n  .-module_menu__pNyRa:hover ~ .-module_menu__dropdown_bg__EYfC8 {\n    display: block;\n  }\n}\n\n.-module_menu__container__qxeOv {\n  background-color: inherit;\n}\n\n.-module_menu_open__JnnO7 {\n  position: absolute;\n  height: 0;\n  overflow: hidden;\n  top: 51px;\n  left: 0;\n  width: 100%;\n  height: calc(100dvh - 51px);\n}\n.-module_menu__container__qxeOv.-module_open__F5j3O > .-module_menu__pNyRa {\n  display: flex;\n}\n\n@media screen and (min-width: 801px) {\n  .-module_menu__container__qxeOv ul:nth-child(2) {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .-module_menu__pNyRa {\n    display: none;\n    flex-direction: column;\n    row-gap: 1rem;\n    margin: 1.5rem 1rem;\n    border-bottom: 1px solid var(--color30, #9e9e9e);\n  }\n  .-module_menu__item__Bi-9G {\n    padding: 0;\n    width: fit-content;\n  }\n}\n\n.-module_menu__button__FGsc3 {\n  display: none;\n  width: 26px;\n  min-width: 26px;\n  height: 26px;\n  padding: 4px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  background-color: var(--color30, gray);\n  cursor: pointer;\n  transition: opacity 0.25s linear;\n}\n.-module_menu__button__FGsc3:hover {\n  opacity: 0.65;\n}\n@media screen and (max-width: 800px) {\n  .-module_menu__button__FGsc3 {\n    display: block;\n  }\n}\n","style-b6871325-6708-485c-9e59-94779f492446");export{e as default};
//# sourceMappingURL=.module.css.js.map