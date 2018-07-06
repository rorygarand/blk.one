export default class ConversationServiceMock {
  // eslint-disable-next-line no-unused-vars
  static getAll(userId, activeOnly = true) {
    return [
      {
        conversationId: 25014250,
        frequencyTimeUnit: 'MONTH',
        frequencyInterval: 1,
        startDate: 1495602000000,
        scheduleStartDate: '2017-05-24',
        endDate: null,
        scheduleEndDate: null,
        startTime: null,
        scheduleDurationMinutes: null,
        name: 'Testing Conversation',
        dateCreated: 1495669254590,
        members: [
          {
            userId: 25029100,
            firstName: 'Fabien',
            lastName: 'Allanic',
            emailAddress: null,
            imageUrl:
              'http://orig11.deviantart.net/1ac2/f/2007/114/d/b/ranma__panda_by_oehr.png',
            currentRole: null,
            role: {
              roleId: 503750,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'test role creation',
              roleDescription: ''
            },
            userRoleId: 506356,
            startDate: 1493614800000,
            endDate: null,
            coach: true,
            primaryMember: true,
            allowedStartTime: null,
            allowedEndTime: null
          },
          {
            userId: 25026708,
            firstName: 'Kushagra',
            lastName: 'Thapar',
            emailAddress: 'kushuthapar@gmail.com',
            imageUrl: 'https://slack.peak6.com/avatar/kushagra.thapar',
            currentRole: null,
            role: {
              roleId: 502201,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'Software Engineer',
              roleDescription: ''
            },
            userRoleId: 502358,
            startDate: 1481522400000,
            endDate: null,
            coach: false,
            primaryMember: true,
            allowedStartTime: null,
            allowedEndTime: null
          }
        ],
        started: true,
        encrypted: false,
        tags: [
          {
            tagId: 501150,
            type: 'QUESTION',
            text: 'What are you working on?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501450,
            type: 'QUESTION',
            text: 'What can I do to help?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501152,
            type: 'QUESTION',
            text: 'Action items/key takeaways?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501900,
            type: 'QUESTION',
            text: 'General',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          }
        ],
        newMessages: true,
        newMessageCount: null,
        active: true,
        lastOtherUserSentTime: 1495669273133
      },
      {
        conversationId: 25014203,
        frequencyTimeUnit: 'WEEK',
        frequencyInterval: 2,
        startDate: 1495602000000,
        scheduleStartDate: '2017-05-24',
        endDate: null,
        scheduleEndDate: null,
        startTime: null,
        scheduleDurationMinutes: null,
        name: 'w/ brock',
        dateCreated: 1495638728530,
        members: [
          {
            userId: 25027750,
            firstName: 'Brock',
            lastName: 'Martin',
            emailAddress: 'brockemartin@gmail.com',
            imageUrl: null,
            currentRole: null,
            role: {
              roleId: 502050,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'Desktop Support Specialist',
              roleDescription: ''
            },
            userRoleId: 506500,
            startDate: 1494478800000,
            endDate: null,
            coach: true,
            primaryMember: true,
            allowedStartTime: null,
            allowedEndTime: null
          },
          {
            userId: 25029100,
            firstName: 'Fabien',
            lastName: 'Allanic',
            emailAddress: null,
            imageUrl:
              'http://orig11.deviantart.net/1ac2/f/2007/114/d/b/ranma__panda_by_oehr.png',
            currentRole: null,
            role: {
              roleId: 503750,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'test role creation',
              roleDescription: ''
            },
            userRoleId: 506356,
            startDate: 1493614800000,
            endDate: null,
            coach: false,
            primaryMember: true,
            allowedStartTime: null,
            allowedEndTime: null
          }
        ],
        started: false,
        encrypted: false,
        tags: [
          {
            tagId: 501150,
            type: 'QUESTION',
            text: 'What are you working on?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501450,
            type: 'QUESTION',
            text: 'What can I do to help?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501152,
            type: 'QUESTION',
            text: 'Action items/key takeaways?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          }
        ],
        newMessages: false,
        newMessageCount: null,
        active: true,
        lastOtherUserSentTime: null
      },
      {
        conversationId: 25014050,
        frequencyTimeUnit: 'WEEK',
        frequencyInterval: 1,
        startDate: 1495170000000,
        scheduleStartDate: '2017-05-19',
        endDate: null,
        scheduleEndDate: null,
        startTime: null,
        scheduleDurationMinutes: null,
        name: 'Fun Conversation with Fabien',
        dateCreated: 1495227167614,
        members: [
          {
            userId: 25026708,
            firstName: 'Kushagra',
            lastName: 'Thapar',
            emailAddress: 'kushuthapar@gmail.com',
            imageUrl: 'https://slack.peak6.com/avatar/kushagra.thapar',
            currentRole: null,
            role: {
              roleId: 502201,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'Software Engineer',
              roleDescription: ''
            },
            userRoleId: 502358,
            startDate: 1481522400000,
            endDate: null,
            coach: false,
            primaryMember: true,
            allowedStartTime: null,
            allowedEndTime: null
          },
          {
            userId: 25029100,
            firstName: 'Fabien',
            lastName: 'Allanic',
            emailAddress: null,
            imageUrl:
              'http://orig11.deviantart.net/1ac2/f/2007/114/d/b/ranma__panda_by_oehr.png',
            currentRole: null,
            role: {
              roleId: 503750,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'test role creation',
              roleDescription: ''
            },
            userRoleId: 506356,
            startDate: 1493614800000,
            endDate: null,
            coach: true,
            primaryMember: true,
            allowedStartTime: null,
            allowedEndTime: null
          }
        ],
        started: true,
        encrypted: false,
        tags: [
          {
            tagId: 501150,
            type: 'QUESTION',
            text: 'What are you working on?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501450,
            type: 'QUESTION',
            text: 'What can I do to help?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501152,
            type: 'QUESTION',
            text: 'Action items/key takeaways?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501900,
            type: 'QUESTION',
            text: 'General',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          }
        ],
        newMessages: false,
        newMessageCount: null,
        active: true,
        lastOtherUserSentTime: 1495669211579
      },
      {
        conversationId: 25013950,
        frequencyTimeUnit: 'WEEK',
        frequencyInterval: 1,
        startDate: 1494910800000,
        scheduleStartDate: '2017-05-16',
        endDate: null,
        scheduleEndDate: null,
        startTime: null,
        scheduleDurationMinutes: null,
        name: 'with MVP',
        dateCreated: 1494967855184,
        members: [
          {
            userId: 25029100,
            firstName: 'Fabien',
            lastName: 'Allanic',
            emailAddress: null,
            imageUrl:
              'http://orig11.deviantart.net/1ac2/f/2007/114/d/b/ranma__panda_by_oehr.png',
            currentRole: null,
            role: {
              roleId: 503750,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'test role creation',
              roleDescription: ''
            },
            userRoleId: 506356,
            startDate: 1493614800000,
            endDate: null,
            coach: false,
            primaryMember: true,
            allowedStartTime: null,
            allowedEndTime: null
          },
          {
            userId: 25026718,
            firstName: 'Michael',
            lastName: 'Vander Pluym',
            emailAddress: null,
            imageUrl: 'https://slack.peak6.com/avatar/michael.vander.pluym',
            currentRole: null,
            role: {
              roleId: 503550,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'New Role for Testing',
              roleDescription: ''
            },
            userRoleId: 505950,
            startDate: 1493010000000,
            endDate: 1495429200000,
            coach: true,
            primaryMember: true,
            allowedStartTime: null,
            allowedEndTime: null
          },
          {
            userId: 25028550,
            firstName: 'Joe',
            lastName: 'Lobraco',
            emailAddress: 'jlobraco@peak6.com',
            imageUrl: 'https://slack.peak6.com/avatar/joe.lobraco',
            currentRole: null,
            role: {
              roleId: 502350,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'Senior Software Engineer',
              roleDescription: ''
            },
            userRoleId: 504962,
            startDate: 1489788910033,
            endDate: null,
            coach: false,
            primaryMember: false,
            allowedStartTime: 1494967855184,
            allowedEndTime: null
          }
        ],
        started: false,
        encrypted: false,
        tags: [
          {
            tagId: 501150,
            type: 'QUESTION',
            text: 'What are you working on?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501450,
            type: 'QUESTION',
            text: 'What can I do to help?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501152,
            type: 'QUESTION',
            text: 'Action items/key takeaways?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          }
        ],
        newMessages: false,
        newMessageCount: null,
        active: true,
        lastOtherUserSentTime: null
      },
      {
        conversationId: 25013852,
        frequencyTimeUnit: 'WEEK',
        frequencyInterval: 1,
        startDate: 1494565200000,
        scheduleStartDate: '2017-05-12',
        endDate: null,
        scheduleEndDate: null,
        startTime: null,
        scheduleDurationMinutes: null,
        name: 'test with Nakul',
        dateCreated: 1494616697335,
        members: [
          {
            userId: 25029100,
            firstName: 'Fabien',
            lastName: 'Allanic',
            emailAddress: null,
            imageUrl:
              'http://orig11.deviantart.net/1ac2/f/2007/114/d/b/ranma__panda_by_oehr.png',
            currentRole: null,
            role: {
              roleId: 503750,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'test role creation',
              roleDescription: ''
            },
            userRoleId: 506356,
            startDate: 1493614800000,
            endDate: null,
            coach: true,
            primaryMember: true,
            allowedStartTime: null,
            allowedEndTime: null
          },
          {
            userId: 25027850,
            firstName: 'Nakul',
            lastName: 'Dureja',
            emailAddress: 'nakuldureja@gmail.com',
            imageUrl: 'https://slack.peak6.com/avatar/nakul.dureja',
            currentRole: null,
            role: {
              roleId: 502201,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'Software Engineer',
              roleDescription: ''
            },
            userRoleId: 505033,
            startDate: 1421733600000,
            endDate: null,
            coach: false,
            primaryMember: true,
            allowedStartTime: null,
            allowedEndTime: null
          }
        ],
        started: true,
        encrypted: false,
        tags: [
          {
            tagId: 501150,
            type: 'QUESTION',
            text: 'What are you working on?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501450,
            type: 'QUESTION',
            text: 'What can I do to help?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501152,
            type: 'QUESTION',
            text: 'Action items/key takeaways?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          }
        ],
        newMessages: false,
        newMessageCount: null,
        active: true,
        lastOtherUserSentTime: null
      },
      {
        conversationId: 25013252,
        frequencyTimeUnit: 'WEEK',
        frequencyInterval: 1,
        startDate: 1492059600000,
        scheduleStartDate: '2017-04-13',
        endDate: null,
        scheduleEndDate: null,
        startTime: null,
        scheduleDurationMinutes: null,
        name: 'test avatar',
        dateCreated: 1492108811388,
        members: [
          {
            userId: 25029100,
            firstName: 'Fabien',
            lastName: 'Allanic',
            emailAddress: null,
            imageUrl:
              'http://orig11.deviantart.net/1ac2/f/2007/114/d/b/ranma__panda_by_oehr.png',
            currentRole: null,
            role: {
              roleId: 501066,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'Contractor',
              roleDescription: 'UNKNOWN'
            },
            userRoleId: 505350,
            startDate: 1490698686275,
            endDate: null,
            coach: false,
            primaryMember: true,
            allowedStartTime: null,
            allowedEndTime: null
          },
          {
            userId: 25026708,
            firstName: 'Kushagra',
            lastName: 'Thapar',
            emailAddress: 'kushuthapar@gmail.com',
            imageUrl: 'https://slack.peak6.com/avatar/kushagra.thapar',
            currentRole: null,
            role: {
              roleId: 502201,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'Software Engineer',
              roleDescription: ''
            },
            userRoleId: 502358,
            startDate: 1481522400000,
            endDate: null,
            coach: true,
            primaryMember: true,
            allowedStartTime: null,
            allowedEndTime: null
          }
        ],
        started: true,
        encrypted: false,
        tags: [
          {
            tagId: 501150,
            type: 'QUESTION',
            text: 'What are you working on?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501450,
            type: 'QUESTION',
            text: 'What can I do to help?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501152,
            type: 'QUESTION',
            text: 'Action items/key takeaways?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501353,
            type: 'QUESTION',
            text: 'new topic',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501750,
            type: 'QUESTION',
            text: 'testing',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501751,
            type: 'QUESTION',
            text: 'hey there',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          }
        ],
        newMessages: false,
        newMessageCount: null,
        active: true,
        lastOtherUserSentTime: 1495227472779
      },
      {
        conversationId: 25013250,
        frequencyTimeUnit: 'WEEK',
        frequencyInterval: 1,
        startDate: 1491973200000,
        scheduleStartDate: '2017-04-12',
        endDate: null,
        scheduleEndDate: null,
        startTime: null,
        scheduleDurationMinutes: null,
        name: 'testing avatar',
        dateCreated: 1492015478409,
        members: [
          {
            userId: 25026673,
            firstName: 'Ryan',
            lastName: 'Pratt',
            emailAddress: 'ryan.pratt@gmail.com',
            imageUrl: 'https://slack.peak6.com/avatar/ryan.pratt',
            currentRole: null,
            role: {
              roleId: 502604,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'CTO',
              roleDescription: null
            },
            userRoleId: 504958,
            startDate: 1489788909708,
            endDate: null,
            coach: false,
            primaryMember: false,
            allowedStartTime: 1494997200000,
            allowedEndTime: null
          },
          {
            userId: 25028550,
            firstName: 'Joe',
            lastName: 'Lobraco',
            emailAddress: 'jlobraco@peak6.com',
            imageUrl: 'https://slack.peak6.com/avatar/joe.lobraco',
            currentRole: null,
            role: {
              roleId: 502350,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'Senior Software Engineer',
              roleDescription: ''
            },
            userRoleId: 504962,
            startDate: 1489788910033,
            endDate: null,
            coach: true,
            primaryMember: true,
            allowedStartTime: null,
            allowedEndTime: null
          },
          {
            userId: 25029100,
            firstName: 'Fabien',
            lastName: 'Allanic',
            emailAddress: null,
            imageUrl:
              'http://orig11.deviantart.net/1ac2/f/2007/114/d/b/ranma__panda_by_oehr.png',
            currentRole: null,
            role: {
              roleId: 501066,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'Contractor',
              roleDescription: 'UNKNOWN'
            },
            userRoleId: 505350,
            startDate: 1490698686275,
            endDate: null,
            coach: false,
            primaryMember: true,
            allowedStartTime: null,
            allowedEndTime: null
          }
        ],
        started: false,
        encrypted: false,
        tags: [
          {
            tagId: 501150,
            type: 'QUESTION',
            text: 'What are you working on?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501450,
            type: 'QUESTION',
            text: 'What can I do to help?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501152,
            type: 'QUESTION',
            text: 'Action items/key takeaways?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          }
        ],
        newMessages: false,
        newMessageCount: null,
        active: true,
        lastOtherUserSentTime: null
      },
      {
        conversationId: 25013200,
        frequencyTimeUnit: 'WEEK',
        frequencyInterval: 1,
        startDate: 1491454800000,
        scheduleStartDate: '2017-04-06',
        endDate: null,
        scheduleEndDate: null,
        startTime: null,
        scheduleDurationMinutes: null,
        name: 'testing',
        dateCreated: 1491512049358,
        members: [
          {
            userId: 25026687,
            firstName: 'Brock',
            lastName: 'Martin',
            emailAddress: 'admin@peak6consulting.com',
            imageUrl: 'https://slack.peak6.com/avatar/brock.martin',
            currentRole: null,
            role: {
              roleId: 501038,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'Desktop Support Specialis',
              roleDescription: 'UNKNOWN'
            },
            userRoleId: 505047,
            startDate: 1489788915557,
            endDate: null,
            coach: false,
            primaryMember: false,
            allowedStartTime: 1493269200000,
            allowedEndTime: null
          },
          {
            userId: 25029100,
            firstName: 'Fabien',
            lastName: 'Allanic',
            emailAddress: null,
            imageUrl:
              'http://orig11.deviantart.net/1ac2/f/2007/114/d/b/ranma__panda_by_oehr.png',
            currentRole: null,
            role: {
              roleId: 501066,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'Contractor',
              roleDescription: 'UNKNOWN'
            },
            userRoleId: 505350,
            startDate: 1490698686275,
            endDate: null,
            coach: false,
            primaryMember: true,
            allowedStartTime: null,
            allowedEndTime: null
          },
          {
            userId: 25026701,
            firstName: 'Lucas',
            lastName: 'Irvine',
            emailAddress: 'lucasirvine@gmail.com',
            imageUrl:
              'http://www.reactiongifs.com/wp-content/uploads/2013/10/tim-and-eric-mind-blown.gif',
            currentRole: null,
            role: {
              roleId: 501051,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'Front End Developer',
              roleDescription: 'UNKNOWN'
            },
            userRoleId: 505106,
            startDate: 1489788918989,
            endDate: null,
            coach: true,
            primaryMember: true,
            allowedStartTime: null,
            allowedEndTime: null
          },
          {
            userId: 25028903,
            firstName: 'Jarrett',
            lastName: 'Widman',
            emailAddress: 'jarrett.widman@vokal.io',
            imageUrl: null,
            currentRole: null,
            role: {
              roleId: 502800,
              company: {
                orgEntityId: 1002,
                name: 'Vokal',
                entityType: 'Company',
                parent: null
              },
              name: 'Director',
              roleDescription: ''
            },
            userRoleId: 505250,
            startDate: 1388556000000,
            endDate: null,
            coach: false,
            primaryMember: false,
            allowedStartTime: 1493874000000,
            allowedEndTime: null
          },
          {
            userId: 25026673,
            firstName: 'Ryan',
            lastName: 'Pratt',
            emailAddress: 'ryan.pratt@gmail.com',
            imageUrl: 'https://slack.peak6.com/avatar/ryan.pratt',
            currentRole: null,
            role: {
              roleId: 502604,
              company: {
                orgEntityId: 1003,
                name: 'PEAK6 Investments, LP',
                entityType: 'Company',
                parent: null
              },
              name: 'CTO',
              roleDescription: null
            },
            userRoleId: 504958,
            startDate: 1489788909708,
            endDate: null,
            coach: false,
            primaryMember: false,
            allowedStartTime: 1491512049358,
            allowedEndTime: null
          }
        ],
        started: true,
        encrypted: false,
        tags: [
          {
            tagId: 501150,
            type: 'QUESTION',
            text: 'What are you working on?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501450,
            type: 'QUESTION',
            text: 'What can I do to help?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501152,
            type: 'QUESTION',
            text: 'Action items/key takeaways?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501600,
            type: 'QUESTION',
            text: 'hey, whatev?',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 501651,
            type: 'QUESTION',
            text: 'testing new topic',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          },
          {
            tagId: 500350,
            type: 'QUESTION',
            text: 'Test Topic',
            state: 'ACTIVE',
            archivedTime: null,
            newMessageCount: null
          }
        ],
        newMessages: true,
        newMessageCount: null,
        active: true,
        lastOtherUserSentTime: 1495647072144
      }
    ];
  }

  // eslint-disable-next-line no-unused-vars
  static getFullConversation(conversationId, userId, startTime, endTime) {
    return {};
  }
}

class EosMock {
  static blockZeroActions = {
    timestamp: '2018-07-06T18:25:55.000',
    producer: 'starteosiobp',
    confirmed: 0,
    previous:
      '0044c328355945beffbc521898348d917b88752e1be5e33d3c6405591d23169f',
    transaction_mroot:
      '0000000000000000000000000000000000000000000000000000000000000000',
    action_mroot:
      '6c9ea12dd0cb5976f2aa70d7375c9a715c56f5aa6d328dbe57de86dcceacf8a2',
    schedule_version: 112,
    new_producers: null,
    header_extensions: [],
    producer_signature:
      'SIG_K1_KfVycTXJttPa42UN8FGCvoiW3m1twLHe5NBfaaiSwdvooXKP51Cmj9z981ubV9hNtjkWAAwBiei6KDY9dzHjo5FT9CzY5S',
    transactions: [],
    block_extensions: [],
    id: '0044c32918d0e32ca3567a6aa6ca97afc7af906230fa38f5146bec810a8c0602',
    block_num: 4506409,
    ref_block_prefix: 1786402467
  };

  static blockNonZeroActions = {
    timestamp: '2018-07-06T18:18:20.000',
    producer: 'eosbeijingbp',
    confirmed: 0,
    previous:
      '0044bf9a8fa15cc3562e57a5e2507ae41d11dc12dcf00c7a702ce3f724ae929f',
    transaction_mroot:
      '4e90717826ed264b562eceb09b72b8245c231d18f6b69219bd862538a02cc159',
    action_mroot:
      '884a25f8fe3985c2735d5ee7bf9cdf37b2f8c3c4a4d1d1dad80f9104d8c4202e',
    schedule_version: 112,
    new_producers: null,
    header_extensions: [],
    producer_signature:
      'SIG_K1_K4i1spCnSertsUPQ6zjJzEiNUmwfJMBBsAKU3fYtguqugxTzXspEHiBJEmGAnyEeFvMJAjiHkHVj6UBVS4WetXmikqwMr8',
    transactions: [
      {
        status: 'executed',
        cpu_usage_us: 4465,
        net_usage_words: 14,
        trx: {
          id:
            '6a608914eca4e34a738bbb22f18a4635eecdb66c9941b66c996da62df5af7d27',
          signatures: [
            'SIG_K1_KaaqCWn4ss65yWw9LLwRzp38f2rYaASSoqj25RPMrkwCeJqygiWLi3RpK9CVN5pCZXo3Gqgn3fHtiJwmw4BJhFvRuuLL3o'
          ],
          compression: 'none',
          packed_context_free_data: '',
          context_free_data: [],
          packed_trx:
            'a6b23f5b52be9bf2000c00000000010000000000ea3055000000409a1ba3c201a0986afd5194bf6700000000a8ed323210a0986afd5194bf6780841e000000000000',
          transaction: {
            expiration: '2018-07-06T18:19:18',
            ref_block_num: 48722,
            ref_block_prefix: 201388699,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: 'eosio',
                name: 'sellram',
                authorization: [
                  {
                    actor: 'gyztcojxhege',
                    permission: 'active'
                  }
                ],
                data: {
                  account: 'gyztcojxhege',
                  bytes: 2000000
                },
                hex_data: 'a0986afd5194bf6780841e0000000000'
              }
            ],
            transaction_extensions: []
          }
        }
      },
      {
        status: 'executed',
        cpu_usage_us: 4227,
        net_usage_words: 16,
        trx: {
          id:
            '611b9a8defa428ea11e28c8a62d56597df249bdd50e2c6e5e6a6f4910ca9c2a9',
          signatures: [
            'SIG_K1_K5AASurueqgsMatmjdPo4qCgDz32YNLBhyo3gNhjrrZiWRb1pFsQcCqSCgMrYAfJ21pn2x2E1Hqmwj5ZShefYU5Gjskq51'
          ],
          compression: 'none',
          packed_context_free_data: '',
          context_free_data: [],
          packed_trx:
            'a3b23f5b46be00e8d30200000000010000000000ea3055000000004873bd3e01a09867ff5096be6900000000a8ed323220a09867ff5096be69a09867ff5096be69809698000000000004454f530000000000',
          transaction: {
            expiration: '2018-07-06T18:19:15',
            ref_block_num: 48710,
            ref_block_prefix: 47441920,
            max_net_usage_words: 0,
            max_cpu_usage_ms: 0,
            delay_sec: 0,
            context_free_actions: [],
            actions: [
              {
                account: 'eosio',
                name: 'buyram',
                authorization: [
                  {
                    actor: 'hazdgobzgyge',
                    permission: 'active'
                  }
                ],
                data: {
                  payer: 'hazdgobzgyge',
                  receiver: 'hazdgobzgyge',
                  quant: '1000.0000 EOS'
                },
                hex_data:
                  'a09867ff5096be69a09867ff5096be69809698000000000004454f5300000000'
              }
            ],
            transaction_extensions: []
          }
        }
      }
    ],
    block_extensions: [],
    id: '0044bf9b0fed73e09e6075a18d4916a1c552625948e7e8738ccedc19738d267f',
    block_num: 4505499,
    ref_block_prefix: 2708824222
  };

  static getActions(params) {
    return 9;
  }

  static getBlock(num) {
    const odd = num % 2 === 0;
    let response;

    if (odd) {
      response = blockZeroActions;
    } else {
      response = blockNonZeroActions;
    }

    return response;
  }
}
