import { Capt1Service } from './../services/capt1.service';
import { capt1, capt2 } from './../interfaces/questions.interfaces';


import { Persona } from './../interfaces/persona.intefaces';
import {  Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { FormsService } from './../services/forms.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css'],
})
export class InicialComponent {


  public formInicial: FormGroup;
  public usuarioEncontrado: any = ' ';
  public validacion: Boolean = true;

  public habilitarCapt2: boolean = false;
  public habilitarCapt3: boolean = false;


  public capt_1Resp: any;
  public capt_2Resp: any;


  constructor(private fb: FormBuilder, private service: FormsService, private capt1Service:Capt1Service) {
    this.formInicial = fb.group({
      usuario: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'blur',
      }),
      password: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'blur',
      }),
    });
  }


  buscar() {

    this.service.createNewUser(this.formInicial.value).subscribe(
      (res: Persona) => {
        this.usuarioEncontrado = res;
        this.validacion = true;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }




  recibirFormulario(e: capt1){
      this.capt_1Resp = e;
      this.habilitarCapt2 = true;
  }

  formularioCapt2(e: capt2){
      this.capt_2Resp=e;
      this.habilitarCapt3 = true;

  }



  registerRespuestas(){

    this.capt1Service.CreateNewresCap1(this.capt_1Resp).subscribe(
      (res: capt1) => {


        this.capt1Service.CreateNewresCap2(this.capt_2Resp).subscribe(
          resp => {

              alert('se ha registrado con exito')
                this.validacion=true;

          },
          (err: any) => {
        alert(' se ha presentado un error')

            console.log(err);
          }
        );

      },
      (err: any) => {

        alert(' se ha presentado un error')
        console.log(err);
      }
    );
  }
}

