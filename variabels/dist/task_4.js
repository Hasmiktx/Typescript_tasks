"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData() {
    return new Promise((res, rej) => {
        setTimeout(() => (res({
            id: 1,
            name: "John"
        })), 1500);
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("start----");
            const respose = yield fetchData();
            console.log("fetching success:", respose);
            return respose;
        }
        catch (err) {
            console.log(err);
        }
    });
}
getData();
