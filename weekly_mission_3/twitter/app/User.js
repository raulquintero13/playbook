class User{
    constructor(id, username, name, bio, dataCreated = new Date(), lastUpdated = new Date()){

        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dataCreated = dataCreated
        this.lastUpdated = lastUpdated
    }

    set setUsername(username){
        this.username = username
    }
    set setBio(bio){
        this.bio = bio
    }

    get getUsername(){
        return this.username
    }
    get getBio(){
        return this.bio
    }
    get getDateCreated(){
        return this.dataCreated
    }
    get getLastUpdated(){
        return this.lastUpdated
    }
}
module.exports = User