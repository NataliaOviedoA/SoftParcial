import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/Services/consulta.service';
import { Consulta } from 'src/app/Models/consulta.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
  providers:[ConsultaService]
})
export class ConsultaComponent implements OnInit {
  listaConsulta: Consulta[] = [];
  closeResult: string;
  constructor(private consultaService: ConsultaService,
    private modalServiceConsulta: NgbModal) { }

  ngOnInit() {
    this.listarConsultas();
  }

  listarConsultas() {
    this.consultaService.listarConsultas().subscribe(respuesta => {
      this.listaConsulta = respuesta;
      console.warn(respuesta);
    });
  }

  open(content3) {
    this.modalServiceConsulta.open(content3, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  registerConsulta(form2) {
    this.consultaService.addConsulta(form2.value).subscribe(respuesta => {
      this.listaConsulta = respuesta;
    });
  }

}
