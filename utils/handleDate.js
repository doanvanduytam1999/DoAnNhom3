exports.DateToString = (ObjDate) => {
    var date = "";
    if ((ObjDate.getMonth() + 1) > 10 && ObjDate.getDate() > 10) {
        date = (ObjDate.getMonth() + 1) + '/' + ObjDate.getDate() + '/' + ObjDate.getFullYear();
    } else {
        if ((ObjDate.getMonth() + 1) < 10) {
            date = date + "0" + (ObjDate.getMonth() + 1) + "/";
        } else {
            date = date + (ObjDate.getMonth() + 1) + "/";
        }

        if (ObjDate.getDate() < 10) {
            date = date + "0" + ObjDate.getDate() + "/";
        } else {
            date = date + ObjDate.getDate() + "/";
        }

        date = date + ObjDate.getFullYear();
    }
    return date;
}

exports.sevenDay = () => {
    var sevenDay = [];
    var temp = new Date();
    for (i = 0; i < 7; i++) {
        var date = this.DateToString(temp);
        sevenDay.push(date);
        temp.setDate(temp.getDate() + 1);
    }
    return sevenDay;
}