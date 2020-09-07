// class Squad {
//     constructor(defaultResources) {
//         this._squad = [];
//         this.addResources(defaultResources); // ПЕРЕИМЕНОВАЛИ combineResources
//     }

//     addResources(defaultResources) {
//         this._squad = [...this._squad, ...defaultResources]; //сравнваем то что было и что добавилось spred оператором
//     }

//     isReadyToMove() {
//         return this._squad.some((unit) => unit.isReadyToMove());
//     }

//     isReadyToFight() {
//         return this._squad.some((unit) => unit.isReadyToFight());
//     }

//     restore() {
//         this._squad.forEach((unit) => unit.restore());
//     }

//     getReadyToMove() {
//         return this._squad.filter(unit => unit.getReadyToMove());
//     }

//     getReadyToFight() {
//         return this._squad.filter(unit => unit.getReadyToFight());
//     }

//     clone(unit) {
//         return this._squad.map((unit) => unit.clone());
//     }
// }

//imunatble
