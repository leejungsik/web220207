import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'study';  //요녀석을 주목하자
  public num : number = 10;  //요녀석도 주목하자
  public all : any = new Array();
  public printAll(arg=""){
    console.log(arg);
  }

  private print(arg=""){
    console.log(arg);
  }

  constructor() {
    var text : string = 'plain text';
    this.print(text);
    this.printAll(text);

    console.log(this.title, this.num, this.all);
  }

  public ifIwereGoToServer() : void {  //요 메소드이다.
    //어떤 특정 데이터를 주는 서버에 갔다왔다고 하자.
    //예를들어 ajax를 실행하고 나서 result값이 아래와 같은 배열이 나왔다고 가정하자.
    this.all.push('Result');
    this.all.push(12345);
    this.all.push(23456);
    this.all.push(78923);
  }
}


