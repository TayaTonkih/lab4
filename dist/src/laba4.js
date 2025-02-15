var Transport;
(function (Transport) {
    Transport.DocumentType = {
        DriverLicense: "Водительские права",
        IdentityCard: "Удостоверение личности",
        TravelDocument: "Проездной документ",
    };
    var Owner = /** @class */ (function () {
        function Owner(surname, name, patronymic, dateOfBirth, document, seriesDocument, numberDocument) {
            this.surname = surname;
            this.name = name;
            this.patronymic = patronymic;
            this.dateOfBirth = dateOfBirth;
            this.document = document;
            this.seriesDocument = seriesDocument;
            this.numberDocument = numberDocument;
        }
        Owner.prototype.showInfo = function () {
            console.log("\n            Владельцы:\n            Фамилия: ".concat(this.surname, "\n            Имя: ").concat(this.name, "\n            Отчество: ").concat(this.patronymic, "\n            Дата рождения: ").concat(this.dateOfBirth.toLocaleDateString(), "\n            Тип документа: ").concat(this.document, "\n            Серия документа: ").concat(this.seriesDocument, "\n            Номер документа: ").concat(this.numberDocument));
        };
        return Owner;
    }());
    Transport.Owner = Owner;
    var Vehicle = /** @class */ (function () {
        function Vehicle(mark, model, yearOfRelease, VIN_number, registrationNumber, owner) {
            this.mark = mark;
            this.model = model;
            this.yearOfRelease = yearOfRelease;
            this.VIN_number = VIN_number;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
        }
        Vehicle.prototype.showInfo = function () {
            console.log("\n            Транспортное средство:\n            Марка: ".concat(this.mark, "\n            Модель: ").concat(this.model, "\n            Год выпуска: ").concat(this.yearOfRelease, "\n            VIN-номер: ").concat(this.VIN_number, "\n            Регистрационный номер: ").concat(this.registrationNumber));
        };
        return Vehicle;
    }());
    Transport.Vehicle = Vehicle;
    var Car = /** @class */ (function (_super) {
        __extends(Car, _super);
        function Car(mark, model, yearOfRelease, VIN_number, registrationNumber, owner, carcaseType, classCar) {
            var _this = _super.call(this, mark, model, yearOfRelease, VIN_number, registrationNumber, owner) || this;
            _this.carcaseType = carcaseType;
            _this.classCar = classCar;
            return _this;
        }
        Car.prototype.showInfo = function () {
            _super.prototype.showInfo.call(this);
            console.log("Тип кузова: ".concat(this.carcaseType, ", Класс автомобиля: ").concat(this.classCar));
        };
        return Car;
    }(Vehicle));
    Transport.Car = Car;
    var Motorbike = /** @class */ (function (_super) {
        __extends(Motorbike, _super);
        function Motorbike(mark, model, yearOfRelease, VIN_number, registrationNumber, owner, frameType, isSport) {
            var _this = _super.call(this, mark, model, yearOfRelease, VIN_number, registrationNumber, owner) || this;
            _this.frameType = frameType;
            _this.isSport = isSport;
            return _this;
        }

        Motorbike.prototype.showInfo = function () {
            _super.prototype.showInfo.call(this);
            console.log("Тип рамы: ".concat(this.frameType, ", Спортивный: ").concat(this.isSport));
        };
        return Motorbike;
    }(Vehicle));
    Transport.Motorbike = Motorbike;
    var VehicleStorage = /** @class */ (function () {
        function VehicleStorage() {
            this.creationDate = new Date();
            this.vehicles = [];
        }
        VehicleStorage.prototype.addVehicle = function (vehicle) {
            this.vehicles.push(vehicle);
        };
        VehicleStorage.prototype.getAllVehicles = function () {
            return this.vehicles;
        };
        return VehicleStorage;
    }());
    Transport.VehicleStorage = VehicleStorage;
})(Transport || (Transport = {}));

var owner1 = new Transport.Owner("Иванов", "Иван", "Иванович", new Date(1990, 1, 1), Transport.DocumentType.DriverLicense, 1234, 567890);
var car1 = new Transport.Car("Toyota", "RAV4", 2021, "1HGBH41JXMN109186", "A123BC", owner1, "SUV", "Luxury");
var bike1 = new Transport.Motorbike("Yamaha", "YZF-R3", 2020, "2HGBH41JXMN109187", "B456CD", owner1, "Спортивная", true);
var garage = new Transport.VehicleStorage();
garage.addVehicle(car1);
garage.addVehicle(bike1);
console.log("Список транспортных средств в гараже:");
garage.getAllVehicles().forEach(function (vehicle) { return vehicle.showInfo(); });
