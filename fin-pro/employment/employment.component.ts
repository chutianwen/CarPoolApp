import { Component, OnInit } from '@angular/core';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {
  emphistory: EmpHistory[] = [
    {firm: 'CAMBRIDGE CAPITAL, LLC',status: 'Active', date: 'Aug 1999-Present', location:'GARDEN CITY, NY', position:'CFO'},
    {firm: 'LANDMARK INTERNATIONAL EQUITIES', status: '', date: 'Feb 1995 - Nov 1999' , location:'HAUPPAUGE, NY', position:'REGISTERED REPRESENTATIVE'},
    {firm: 'GKN SECURITIES CORP.',status: '', date: 'Sep 1993 - Jan 1995', location:'GARDEN CITY, NY', position:'EXEC. V.P.'},
    {firm: 'GKN SECURITIES CORP.',status: '', date: 'Nov 1992 - Sep 1993', location:'WESTBURY, NY', position:'OTHER - SPECIALIST'},
    {firm: 'CORNELL UNIVERSITY',status: '', date: 'Aug 1989 - May 1993', location:'ITHECA, NY', position:'STUDENT - STUDENT'},
    {firm: 'MERRICK WOODS COUNTY DAY CAMP', status: '', date: 'Jun 1991 - Aug 1991', location:'FREEPORT, NY', position:'OTHER - PURCHASING'},
    {firm: 'INC. VILLAGE OF FREEPORT', status: '', date: 'May 1990 - Aug 1990', location:'LIDO BECCH, NY', position:'OTHER - SUMMER STAFF'}
  ]
  registration: Reg[] = [
    {regulator: 'New York', category: 'AG', status_date: '05/02/2001', status: 'Termed', approval_date:'11/10/1999'},
    {regulator: 'FINRA', category: 'ET', status_date: '05/02/2001', status: 'Termed', approval_date:'11/03/1999'},
    {regulator: '', category: 'FN', status_date: '05/02/2001', status: 'Termed Without Registration', approval_date:''},
    {regulator: '', category: 'GP', status_date: '05/02/2001', status: 'Termed', approval_date:'11/01/1999'},
    {regulator: '', category: 'GS', status_date: '05/02/2001', status: 'Termed', approval_date:'11/01/1999'}
  ]

  exam: Exam[] = [
    {name: 'S4 - Registered Options Principal Examination', color: 'colordblue', icon: 'clock' , text: 'Pending', date: 'Apr 12, 1993'},
    {name: 'S7 - General Securities Representative Examination', color: 'colorgreen', icon: 'check' , 
    text: 'Passed', date: 'Nov 27, 1992',
      history: [
        { status_h:'Passed', score:'70', type:'Official Result', window:'May 13, 2004 - Sep 10, 2004', date:'10/01/2017'},
        { status_h:'Failed', score:'60', type:'Official Result', window:'May 13, 2003 - Sep 10, 2003', date:'07/01/2017'},
        { status_h:'Withdraw', score:'--', type:'Official Result', window:'Oct 14, 2000 - Feb 11, 2001', date:'07/01/2017'}
      ]
    },
    {name: 'S24 - General Securities Principal Examination', color: 'colorgreen', icon: 'check' , text: 'Passed', date: 'Apr 12, 1993'},
    {name: 'S27 - Financial and Operations Principal Examination', color: 'colorred', icon: 'times', text: 'Failed', date: 'Jan 8, 2001'}
  ]

  disclosure: Disclosure[] = [
    {type: 'Civil Judicial Action', count: 1, label_class:'label-danger'},
    {type: 'Customer Complaints', count: 3, label_class:'label-danger'},
    {type: 'Judgment/Lien', count: 1, label_class:'label-danger'},
    {type: 'Regulatory Actions', count: 5, label_class:'label-danger'},
    {type: 'Customer Complaints', count: 9, label_class:''},
  ]
  
  disclosure_record: DisclosureRecord[] = [
    {name: 'Civil Judicial Action', id: 1645909, status: 'current',
      history: [
        { document:'U6', initiate:'SEC', event_date:'Sept 19, 2012', report_date:'Feb 8, 2013'}
      ]
    },
    {name: 'Customer Complaint', id: 193662, status: 'current',
      history: [
        { document:'U6', initiate:'MILLENNIUM BROKERAGE, L.L.C. (47728)', event_date:'Aug 30, 1999', report_date:'Apr 23, 2003'},
        { document:'U4', initiate:'Cambridge Capital, LLC (41464)', event_date:'Aug 6, 1999', report_date:'Dec 15, 1999'}
      ]
    },
    {name: 'Customer Complaint', id: 193662, status: 'previous',
      history: [
        { document:'U6', initiate:'FINRA', event_date:'Jun 19, 1996', report_date:'Jul 7, 1999'},
        { document:'U4', initiate:'Cambridge Capital, LLC (41464)', event_date:'Jun 19, 1996', report_date:'Jul 7, 1999'}
      ]
    },
  ]

constructor() { }

  ngOnInit() {
  }
}

interface DisclosureRecord {
  name: string
  id: number
  status: string
  history?: DisclosureHistory[]
}

interface DisclosureHistory {
  document: string
  initiate: string
  event_date: string
  report_date: string
}

interface Disclosure {
  type: string
  count: number
  label_class: string
}

interface EmpHistory {
  firm: string
  status: string
  date: string
  location: string
  position:string
}
interface Reg {
  regulator: string
  category: string
  status_date: string
  status: string
  approval_date:string
}
interface Exam {
  name: string
  color: string
  icon: string
  date: string
  text: string
  history?: ExamHistory[]
}

interface ExamHistory {
  status_h: string
  date: string
  score: string
  type: string
  window: string
}