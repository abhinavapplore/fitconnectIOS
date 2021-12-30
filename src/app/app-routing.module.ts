import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CoachParticipatedEventsComponent } from './coach-participated-events/coach-participated-events.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'connexion',
    loadChildren: () =>
      import('./connexion/connexion.module').then((m) => m.ConnexionPageModule),
  },
  {
    path: 'forget',
    loadChildren: () =>
      import('./forget-password/forget-password.module').then(
        (m) => m.ForgetPasswordPageModule
      ),
  },
  {
    path: 'inscription-particulier',
    loadChildren: () =>
      import('./inscription-particulier/inscription-particulier.module').then(
        (m) => m.InscriptionParticulierPageModule
      ),
  },
  {
    path: 'conditions',
    loadChildren: () =>
      import('./conditions/conditions.module').then(
        (m) => m.ConditionsPageModule
      ),
  },

  {
    path: 'question',
    loadChildren: () =>
      import('./question/question.module').then((m) => m.QuestionPageModule),
  },
  {
    path: 'question2',
    loadChildren: () =>
      import('./question2/question2.module').then((m) => m.Question2PageModule),
  },
  {
    path: 'question3',
    loadChildren: () =>
      import('./question3/question3.module').then((m) => m.Question3PageModule),
  },
  {
    path: 'inscription-professionnel',
    loadChildren: () =>
      import(
        './inscription-professionnel/inscription-professionnel.module'
      ).then((m) => m.InscriptionProfessionnelPageModule),
  },
  {
    path: 'inscription-professionnel2',
    loadChildren: () =>
      import(
        './inscription-professionnel2/inscription-professionnel2.module'
      ).then((m) => m.InscriptionProfessionnel2PageModule),
  },
  {
    path: 'inscription-professionnel3',
    loadChildren: () =>
      import(
        './inscription-professionnel3/inscription-professionnel3.module'
      ).then((m) => m.InscriptionProfessionnel3PageModule),
  },
  {
    path: 'inscription-docs',
    loadChildren: () =>
      import('./inscription-docs/inscription-docs.module').then(
        (m) => m.InscriptionDocsPageModule
      ),
  },
  {
    path: 'evenementcoach',
    loadChildren: () =>
      import('./evenementcoach/evenementcoach.module').then(
        (m) => m.EvenementcoachPageModule
      ),
  },
  {
    path: 'abonnement',
    loadChildren: () =>
      import('./abonnement/abonnement.module').then(
        (m) => m.AbonnementPageModule
      ),
  },

  {
    path: 'evenements-coach',
    loadChildren: () =>
      import('./evenements-coach/evenements-coach.module').then(
        (m) => m.EvenementsCoachPageModule
      ),
  },
  {
    path: 'coacheditprofile',
    loadChildren: () =>
      import('./coacheditprofile/coacheditprofile.module').then(
        (m) => m.CoacheditprofilePageModule
      ),
  },
  {
    path: 'coachviewprofile',
    loadChildren: () =>
      import('./coachviewprofile/coachviewprofile.module').then(
        (m) => m.CoachviewprofilePageModule
      ),
  },

  {
    path: 'evenementcoachvue',
    loadChildren: () =>
      import('./evenementcoachvue/evenementcoachvue.module').then(
        (m) => m.EvenementcoachvuePageModule
      ),
  },
  {
    path: 'confirmation-rejoindre',
    loadChildren: () =>
      import('./confirmation-rejoindre/confirmation-rejoindre.module').then(
        (m) => m.ConfirmationRejoindrePageModule
      ),
  },
  {
    path: 'click-nantes-particuliers',
    loadChildren: () =>
      import(
        './click-nantes-particuliers/click-nantes-particuliers.module'
      ).then((m) => m.ClickNantesParticuliersPageModule),
  },
  {
    path: 'map-sportifs',
    loadChildren: () =>
      import('./map-sportifs/map-sportifs.module').then(
        (m) => m.MapSportifsPageModule
      ),
  },

  {
    path: 'mes-evenements',
    loadChildren: () =>
      import('./mes-evenements/mes-evenements.module').then(
        (m) => m.MesEvenementsPageModule
      ),
  },
  {
    path: 'mes-evenements-crees',
    loadChildren: () =>
      import('./mes-evenements-crees/mes-evenements-crees.module').then(
        (m) => m.MesEvenementsCreesPageModule
      ),
  },
  {
    path: 'mes-evenements-participes',
    loadChildren: () =>
      import(
        './mes-evenements-participes/mes-evenements-participes.module'
      ).then((m) => m.MesEvenementsParticipesPageModule),
  },
  {
    path: 'profil-activite',
    loadChildren: () =>
      import('./profil-activite/profil-activite.module').then(
        (m) => m.ProfilActivitePageModule
      ),
  },
  {
    path: 'mon-profil',
    loadChildren: () =>
      import('./mon-profil/mon-profil.module').then(
        (m) => m.MonProfilPageModule
      ),
  },
  {
    path: 'mon-profil-activite',
    loadChildren: () =>
      import('./mon-profil-activite/mon-profil-activite.module').then(
        (m) => m.MonProfilActivitePageModule
      ),
  },

  {
    path: 'mon-compte',
    loadChildren: () =>
      import('./mon-compte/mon-compte.module').then(
        (m) => m.MonComptePageModule
      ),
  },
  {
    path: 'parametres',
    loadChildren: () =>
      import('./parametres/parametres.module').then(
        (m) => m.ParametresPageModule
      ),
  },
  {
    path: 'creer-evenement',
    loadChildren: () =>
      import('./creer-evenement/creer-evenement.module').then(
        (m) => m.CreerEvenementPageModule
      ),
  },
  {
    path: 'messagerie',
    loadChildren: () =>
      import('./messagerie/messagerie.module').then(
        (m) => m.MessageriePageModule
      ),
  },
  {
    path: 'message',
    loadChildren: () =>
      import('./message/message.module').then((m) => m.MessagePageModule),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('./notifications/notifications.module').then(
        (m) => m.NotificationsPageModule
      ),
  },
  {
    path: 'forget-password',
    loadChildren: () =>
      import('./forget-password/forget-password.module').then(
        (m) => m.ForgetPasswordPageModule
      ),
  },
  {
    path: 'inscription-particulier',
    loadChildren: () =>
      import('./inscription-particulier/inscription-particulier.module').then(
        (m) => m.InscriptionParticulierPageModule
      ),
  },
  {
    path: 'inscription-professionnel3',
    loadChildren: () =>
      import(
        './inscription-professionnel3/inscription-professionnel3.module'
      ).then((m) => m.InscriptionProfessionnel3PageModule),
  },
  {
    path: 'map-sportifs',
    loadChildren: () =>
      import('./map-sportifs/map-sportifs.module').then(
        (m) => m.MapSportifsPageModule
      ),
  },
  {
    path: 'responce3',
    loadChildren: () =>
      import('./responce3/responce3.module').then((m) => m.Responce3PageModule),
  },
  {
    path: 'creescoach',
    loadChildren: () =>
      import('./creescoach/creescoach.module').then(
        (m) => m.CreescoachPageModule
      ),
  },
  {
    path: 'chatpage',
    loadChildren: () =>
      import('./chatpage/chatpage.module').then((m) => m.ChatpagePageModule),
  },
  {
    path: 'participants',
    loadChildren: () =>
      import('./participants/participants.module').then(
        (m) => m.ParticipantsPageModule
      ),
  },
  {
    path: 'followlist',
    loadChildren: () =>
      import('./followlist/followlist.module').then(
        (m) => m.FollowlistPageModule
      ),
  },
  {
    path: 'conversation',
    loadChildren: () =>
      import('./conversation/conversation.module').then(
        (m) => m.ConversationPageModule
      ),
  },
  {
    path: 'paymentpage',
    loadChildren: () =>
      import('./paymentpage/paymentpage.module').then(
        (m) => m.PaymentpagePageModule
      ),
  },
  {
    path: 'ranking',
    loadChildren: () =>
      import('./ranking/ranking.module').then((m) => m.RankingPageModule),
  },
  {
    path: 'rateuser',
    loadChildren: () =>
      import('./rateuser/rateuser.module').then((m) => m.RateuserPageModule),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomePageModule),
  },
  {
    path: 'profilereview',
    loadChildren: () =>
      import('./profilereview/profilereview.module').then(
        (m) => m.ProfilereviewPageModule
      ),
  },
  {
    path: 'watchreview',
    loadChildren: () =>
      import('./watchreview/watchreview.module').then(
        (m) => m.WatchreviewPageModule
      ),
  },
  {
    path: 'searchfilter',
    loadChildren: () =>
      import('./searchfilter/searchfilter.module').then(
        (m) => m.SearchfilterPageModule
      ),
  },
  {
    path: 'groupconversation',
    loadChildren: () => import('./groupconversation/groupconversation.module').then(m => m.GroupconversationPageModule)
  },
  {
    path: 'edit-particular-event',
    loadChildren: () => import('./edit-particular-event/edit-particular-event.module').then(m => m.EditParticularEventPageModule)
  },
  {
    path: 'sports-practice',
    loadChildren: () => import('./sports-practice/sports-practice.module').then(m => m.SportsPracticePageModule)
  },
  {
    path: 'coach-participated-events',
    component: CoachParticipatedEventsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
