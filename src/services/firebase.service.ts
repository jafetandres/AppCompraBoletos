import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private snapshotChangesSubscription: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase
  ){}

  getTasks(){
    
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
      
        if(currentUser){
          this.snapshotChangesSubscription = this.afs.collection('people').doc(currentUser.uid).collection('tasks').snapshotChanges();
          resolve(this.snapshotChangesSubscription);
        }
      })
    })
  }
  getRutas(){
    
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
      
        if(currentUser){

          this.snapshotChangesSubscription = this.afs.collection('people').doc(currentUser.uid).collection('ruta').snapshotChanges();
          resolve(this.snapshotChangesSubscription);
        }
      })
    })
  }
  getPaises(){
    
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
      
        if(currentUser){
          this.snapshotChangesSubscription = this.afs.collection('pais').snapshotChanges();
          resolve(this.snapshotChangesSubscription);
        }
      })
    })
  }
  getProvincias(){
    
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
      
        if(currentUser){
          this.snapshotChangesSubscription = this.afs.collection('provincia').snapshotChanges();
          resolve(this.snapshotChangesSubscription);
        }
      })
    })
  }

  getTask(taskId){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if(currentUser){
          
          this.snapshotChangesSubscription = this.afs.doc<any>('people/' + currentUser.uid + '/tasks/' + taskId).valueChanges()
          .subscribe(snapshots => {
            resolve(snapshots);
          }, err => {
            reject(err)
          })
        }
      })
    });
  }

  getPais(id){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if(currentUser){
          
          this.snapshotChangesSubscription = this.afs.doc<any>('pais/'+ id).valueChanges()
          .subscribe(snapshots => {
            resolve(snapshots);
          }, err => {
            reject(err)
          })
        }
      })
    });
  }
  getPerfil(){

    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
 
        // if(currentUser){
          
        //   this.snapshotChangesSubscription = this.afs.doc<any>('people/' + currentUser.uid + '/tasks/' ).valueChanges()
        //   .subscribe(snapshots => {
            resolve(currentUser);
          }, err => {
            reject(err)
          })
        });
     
   
  }


    // var user = firebase.auth().currentUser;

    
      // this.afAuth.authState.subscribe(data => {

        // console.log('A informacao de data ' + data.email);
        // return data;
      // });
//     }

// if (user != null) {


//    user.providerData.subscribe(
//      data=>{

//      },err =>{

//      })
   
  //{

  //   console.log("Sign-in provider: " + profile.providerId);
  //   console.log("  Provider-specific UID: " + profile.uid);
  //   console.log("  Name: " + profile.displayName);
  //   console.log("  Email: " + profile.email);
  //   console.log("  Photo URL: " + profile.photoURL);
  // }
  

  

  unsubscribeOnLogOut(){
    let disposeMe = this.snapshotChangesSubscription.subscribe();
    //remember to unsubscribe from the snapshotChanges
    disposeMe.unsubscribe();
  }

  updateTask(taskKey, value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('tasks').doc(taskKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }


  actualizarPais(id, value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('pais').doc(id).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
  actualizarPerfil(imageURI,value){

    var user = firebase.auth().currentUser;
    console.log("ruta esta1: "+value.photoURL);
    console.log("ruta esta2: "+imageURI);
    return new Promise<any>((resolve, reject) => {
     
      let currentUser = firebase.auth().currentUser;
  
      currentUser.updateProfile({
        
        photoURL: value.photoURL,
        displayName: value.displayName


      }).then(
        res=> resolve(res),
        err=> reject(err)
      
        // An error happened.
      )});
     
  }

  deleteTask(taskKey){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('tasks').doc(taskKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
  eliminarPais(taskKey){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('pais').doc(taskKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  createTask(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('people').doc(currentUser.uid).collection('tasks').add({
        title: value.title,
        description: value.description,
        image: value.image
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
  crearRuta(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('bd').doc(currentUser.uid).collection('ruta').add({
        descripcion: value.descripcion,
        precio: value.precio
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
  crearPais(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('pais').add({
        descripcion: value.descripcion,
      })
      // this.afs.collection('people').doc(currentUser.uid).collection('pais').add({
      //   descripcion: value.descripcion,
      // })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
  crearProvincia(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('provincia').add({
        pais: value.pais,
        descripcion: value.descripcion,

      })
   
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
   
  };

  uploadImage(imageURI){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child(currentUser.uid);
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          snapshot.ref.getDownloadURL()
          .then(res => resolve(res))
        }, err => {
          reject(err);
        })
      })
    })
  }
}