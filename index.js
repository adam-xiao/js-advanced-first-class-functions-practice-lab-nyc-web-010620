function logDriverNames(list){
    list.forEach( function(driver){
        return console.log(driver.name)
    })
}

function logDriversByHometown(list, hometown){
    list.filter( function(driver){
        if (driver.hometown === hometown){
            return console.log(driver.name)
        }
    })
}

function driversByRevenue(list){   
    return list.slice().sort( function(d1, d2){
        return d1.revenue - d2.revenue
    })
}

function driversByName(list){   
    return list.slice().sort( function(d1, d2){
        return (d1.name).localeCompare(d2.name)
    })
}

const totalRevenue = function(list){
    return list.reduce( function(total, currentDriver){
        return currentDriver.revenue + total;
      }, 0);
}

function averageRevenue(list){
    return totalRevenue(list) / list.length
}