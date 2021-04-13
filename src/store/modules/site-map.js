const state = {
  about: {
    header: {
      'zh-TW': '關於本系',
      'en-US': 'About',
      href: '/about'
    },
    list: {
      intro: {
        'zh-TW': '系所介紹',
        'en-US': 'Introduction',
        href: '/about/intro'
      },
      faculty: {
        'zh-TW': '師資陣容',
        'en-US': 'Faculty',
        href: '/about/faculty'
      },
      staff: {
        'zh-TW': '系辦成員',
        'en-US': 'Staff',
        href: '/about/staff'
      },
      award: {
        'zh-TW': '榮譽事蹟',
        'en-US': 'Award',
        href: '/about/award'
      },
      rule: {
        'zh-TW': '法規彙編',
        'en-US': 'Rule',
        href: '/about/rule'
      },
      contact: {
        'zh-TW': '聯絡我們',
        'en-US': 'Contact Us',
        href: '/about/contact'
      }
    }
  },
  announcement: {
    header: {
      'zh-TW': '系所公告',
      'en-US': 'Announcement',
      href: '/announcement'
    },
    list: {
      all: {
        'zh-TW': '全部公告',
        'en-US': 'All',
        href: '/announcement/all'
      },
      activity: {
        'zh-TW': '活動公告',
        'en-US': 'Activity',
        href: '/announcement/activity'
      },
      recruitment: {
        'zh-TW': '徵才資訊',
        'en-US': 'Recruitment',
        href: '/announcement/recruitment'
      },
      admission: {
        'zh-TW': '招生資訊',
        'en-US': 'Admission',
        href: '/announcement/admission'
      }
    }
  },
  student: {
    header: {
      'zh-TW': '學生事務',
      'en-US': 'Student',
      href: '/student'
    },
    list: {
      highSchool: {
        'zh-TW': '高中生專區',
        'en-US': 'For High School Students',
        href: '/student/high-school'
      },
      college: {
        'zh-TW': '大學部',
        'en-US': 'College',
        href: '/student/college'
      },
      master: {
        'zh-TW': '碩士',
        'en-US': 'Master',
        href: '/student/master'
      },
      phd: {
        'zh-TW': '博士',
        'en-US': 'Ph.D',
        href: '/student/phd'
      },
      international: {
        'zh-TW': '國際事務',
        'en-US': 'International',
        href: '/student/international'
      },
      studentAssociation: {
        'zh-TW': '招生資訊',
        'en-US': 'Student Association',
        href: '/student/student-association'
      }
    }
  },
  research: {
    header: {
      'zh-TW': '學術研究',
      'en-US': 'Research',
      href: '/research'
    },
    list: {
      lab: {
        'zh-TW': '實驗室',
        'en-US': 'Laboratories',
        href: '/research/lab'
      },
      researchGroup: {
        'zh-TW': '研究群',
        'en-US': 'Research Group',
        href: '/research/research-group'
      },
      center: {
        'zh-TW': '研究中心',
        'en-US': 'Center',
        href: '/research/center'
      }
    }
  },
  resource: {
    header: {
      'zh-TW': '相關服務',
      'en-US': 'Resource',
      href: '/resource'
    },
    list: {
      venue: {
        'zh-TW': '場地租借',
        'en-US': 'Venue',
        href: '/resource/venue'
      },
      survey: {
        'zh-TW': '問卷系統',
        'en-US': 'Survey',
        href: 'http://ieet.csie.ncku.edu.tw/'
      },
      sitemap: {
        'zh-TW': '網站地圖',
        'en-US': 'Site Map',
        href: '/resource/sitemap'
      },
      alumni: {
        'zh-TW': '校友專區',
        'en-US': 'Alumni',
        href: 'http://www.csie.ncku.edu.tw/classmate/index.php?p=phdmenu'
      },
      link: {
        'zh-TW': '其他連結',
        'en-US': 'Links',
        href: '/resource/link'
      }
    }
  }
}

const getters = {}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
