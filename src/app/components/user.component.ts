import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: './../../app/template/user.component.html',
    providers:[PostsService]
})
 export class UserComponent  {
    name:string;
    address: address;
    hobbies: string[];
    okk:string;
    posts:Post[];
constructor(private postsService: PostsService){
    this.name= "oye b";
    this.address = {
        street:'south city',
        city: 'gurugram'
    };
    this.hobbies = ["music",'dancing','surfing'];
    this.postsService.getPosts().subscribe(posts => {
        //console.log(posts);
        this.posts = posts;
    });
}
     deletelist(i){
        this.hobbies.splice(i,1);
    }
    addHobbies(hobby){
        this.hobbies.push(hobby);
        this.okk = "";

     }
}
interface address{
    street:string;
    city:string;
}
interface Post{
    title: string,
    body: string
}