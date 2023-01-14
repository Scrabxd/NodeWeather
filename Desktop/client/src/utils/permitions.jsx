import {typeUser} from './Users';

export const Pages = { //must be the same as the url name
  MyProfile: [
    typeUser.SADMIN,
    typeUser.USER,
    typeUser.GUEST
  ],
  SpacePath: [
    typeUser.SADMIN
  ],
  positions: [
    typeUser.SADMIN,
    typeUser.ADMIN,
    typeUser.USER,
    typeUser.GUEST,
    typeUser.PARTNER
  ],
  companies: [
    typeUser.SADMIN,
    typeUser.ADMIN,
    typeUser.USER,
    typeUser.GUEST
  ],
  recentPositions: [
    typeUser.SADMIN,
    typeUser.ADMIN,
    typeUser.USER,
    typeUser.GUEST
  ],
  timeline: [
    typeUser.SADMIN,
    typeUser.ADMIN,
  ],
  signup: [
    typeUser.SADMIN,
  ],
  progress: [
    typeUser.USER,
  ],
  profile: [
    typeUser.SADMIN,
    typeUser.ADMIN,
    typeUser.USER,
    typeUser.GUEST,
    typeUser.PARTNER
  ],
  edittimeline: [
  ],
  skills: [
    typeUser.SADMIN,
    typeUser.ADMIN,
    typeUser.USER,
  ],
  savedSearches: [
    typeUser.SADMIN,
    typeUser.ADMIN,
    typeUser.USER,
  ],
  map: [
    typeUser.SADMIN,
    typeUser.ADMIN,
  ],
  allUsers: [
    typeUser.USER,
  ],
  activityUser: [
    typeUser.SADMIN,
    typeUser.ADMIN,
  ],
  activityFilters: [
    typeUser.SADMIN,
  ],
  steps21: [
    typeUser.SADMIN,
    typeUser.ADMIN,
    typeUser.USER,
  ],
  cvmonitoring: [
    typeUser.SADMIN,
    typeUser.ADMIN,
  ],
  pdfbill: [
    typeUser.SADMIN,
  ],
  dashboard: [
    typeUser.SADMIN,
    typeUser.ADMIN,
  ],
  dockingBridges: [
    typeUser.ADMIN,
    // typeUser.USER,
    typeUser.SADMIN
  ],
  englishClass: [
    typeUser.ADMIN,
    typeUser.USER,
    typeUser.ENGLISH,
    typeUser.SADMIN
  ],
  formatCvUsers: [
    typeUser.SADMIN,
    typeUser.ADMIN,
  ],
  guidecv: [
    typeUser.USER,
  ],
  formnotes: [
    typeUser.USER,
  ],
  listadmin: [
    typeUser.SADMIN,
    typeUser.ADMIN,
  ],
  naga: [
    typeUser.SADMIN,
    typeUser.ADMIN,
    typeUser.USER
  ],
  profileSeekers: [
    typeUser.SADMIN,
    typeUser.PARTNER
  ],
  hrystartups: [
    typeUser.SADMIN,
    typeUser.PARTNER
  ],
  MasterEdit: [
    typeUser.SADMIN
  ]
}

export const canSaveFilters = [
  typeUser.SADMIN,
  typeUser.ADMIN,
  typeUser.USER
]
