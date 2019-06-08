import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  stats: Stat[] = [
    {label: 'Current Disclosures',color: '#FB483D',data: 10},
    {label: 'Archived Disclosures',color: '#5C594C',data: 9},
    {label: 'Exams Passed',color: '#9EC405',data: 9},
    {label: 'Years of Experience',color: '#0082D1',data: 6},
    {label: 'State Licenses',color: '#233E66',data: 20}
  ]
  activitybadges: Badge[] = [
    {label: 'Announcements',badge_class: 'label-blue',data: 3},
    {label: 'Notifications',badge_class: '',data: 7},
    {label: 'Tasks',badge_class: '',data: 6}
  ]
  activitylist: ActivityList[] = [
    {icon: 'bullhorn', color:'colorblue', message: 'Filing Season Approaching!', action:''},
    {icon: 'bell', color:'', message: 'North Coast Securities: Reminder Annual Attestation season is here. Your responses are due by April 15, 2017. ', action: 'Detail'},
    {icon: 'bell', color:'',message: 'FINRA would like to inform you about test center closings in some locations due to inclement weather.',action: 'Detail'},
    {icon: 'list-ul', color:'',message: 'Upcoming CE Session on Nov 30, 2017',action:'Complete'},
    {icon: 'list-ul', color:'',message: 'Pending U4 Filing by North Coast Securities',action:'Detail'}
  ]
  currentaddress: CurrentAddress[]=[
    {address:'116 THE CRESCENT, ROSLYN HEIGHTS , NY 11577', date:'Jan 1996 - Present'},
    {address:'1 EAST MILL DRIVE APT 2F, GREAT NECK, NY 11021', date:'Jan 1995 - Present'}
  ]
  previousaddress: PrevAddress[]=[
    {address:'111 GREAT NECK ROAD, GREAT NECK, NY 11021', date:'Jan 1991 - Jan 1995'},
    {address:'3123 LYDIA LN., BELLMORE, NY 11710', date:'Jan 1991 - Jan 1995'}
  ]
  quicklinks: QuickLink[]=[
    {icon:'print', message:'Print My Report'},
    {icon:'edit', message:'Update Profile'},
    {icon:'file-o', message:'View My U5 Form'}
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Stat {
  label: string
  color: string
  data: number
}
interface Badge {
  label: string
  badge_class: string
  data: number
}
interface ActivityList {
  icon: string
  color: string
  message: string
  action: string
}

interface CurrentAddress {
  address: string
  date: string
}
interface PrevAddress {
  address: string
  date: string
}
interface QuickLink {
  icon: string
  message: string
}



