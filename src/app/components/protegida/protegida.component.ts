import { Component, OnInit, ɵConsole } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-protegida",
  templateUrl: "./protegida.component.html",
  styles: [],
})
export class ProtegidaComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.auth.userProfile$.subscribe((perfil) => {
      console.warn(perfil);
    });
  }
}
