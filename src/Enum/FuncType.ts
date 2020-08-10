enum FuncType {
    NONE = "none",
    ADD_STATE = "addState",
    SUB_STATE = "subState",
    DAMAGE = "damage",
    DAMAGE_NP = "damageNp",
    GAIN_STAR = "gainStar",
    GAIN_HP = "gainHp",
    GAIN_NP = "gainNp",
    LOSS_NP = "lossNp",
    SHORTEN_SKILL = "shortenSkill",
    EXTEND_SKILL = "extendSkill",
    RELEASE_STATE = "releaseState",
    LOSS_HP = "lossHp",
    INSTANT_DEATH = "instantDeath",
    DAMAGE_NP_PIERCE = "damageNpPierce",
    DAMAGE_NP_INDIVIDUAL = "damageNpIndividual",
    ADD_STATE_SHORT = "addStateShort",
    GAIN_HP_PER = "gainHpPer",
    DAMAGE_NP_STATE_INDIVIDUAL = "damageNpStateIndividual",
    HASTEN_NPTURN = "hastenNpturn",
    DELAY_NPTURN = "delayNpturn",
    DAMAGE_NP_HPRATIO_HIGH = "damageNpHpratioHigh",
    DAMAGE_NP_HPRATIO_LOW = "damageNpHpratioLow",
    CARD_RESET = "cardReset",
    REPLACE_MEMBER = "replaceMember",
    LOSS_HP_SAFE = "lossHpSafe",
    DAMAGE_NP_COUNTER = "damageNpCounter",
    DAMAGE_NP_STATE_INDIVIDUAL_FIX = "damageNpStateIndividualFix",
    DAMAGE_NP_SAFE = "damageNpSafe",
    CALL_SERVANT = "callServant",
    PT_SHUFFLE = "ptShuffle",
    LOSS_STAR = "lossStar",
    CHANGE_SERVANT = "changeServant",
    CHANGE_BG = "changeBg",
    DAMAGE_VALUE = "damageValue",
    WITHDRAW = "withdraw",
    FIX_COMMANDCARD = "fixCommandcard",
    SHORTEN_BUFFTURN = "shortenBuffturn",
    EXTEND_BUFFTURN = "extendBuffturn",
    SHORTEN_BUFFCOUNT = "shortenBuffcount",
    EXTEND_BUFFCOUNT = "extendBuffcount",
    CHANGE_BGM = "changeBgm",
    DISPLAY_BUFFSTRING = "displayBuffstring",
    RESURRECTION = "resurrection",
    GAIN_NP_BUFF_INDIVIDUAL_SUM = "gainNpBuffIndividualSum",
    SET_SYSTEM_ALIVE_FLAG = "setSystemAliveFlag",
    FORCE_INSTANT_DEATH = "forceInstantDeath",
    DAMAGE_NP_RARE = "damageNpRare",
    GAIN_NP_FROM_TARGETS = "gainNpFromTargets",
    GAIN_HP_FROM_TARGETS = "gainHpFromTargets",
    LOSS_HP_PER = "lossHpPer",
    LOSS_HP_PER_SAFE = "lossHpPerSafe",
    SHORTEN_USER_EQUIP_SKILL = "shortenUserEquipSkill",
    QUICK_CHANGE_BG = "quickChangeBg",
    SHIFT_SERVANT = "shiftServant",
    DAMAGE_NP_AND_CHECK_INDIVIDUALITY = "damageNpAndCheckIndividuality",
    ABSORB_NPTURN = "absorbNpturn",
    OVERWRITE_DEAD_TYPE = "overwriteDeadType",
    FORCE_ALL_BUFF_NOACT = "forceAllBuffNoact",
    BREAK_GAUGE_UP = "breakGaugeUp",
    BREAK_GAUGE_DOWN = "breakGaugeDown",
    EXP_UP = "expUp",
    QP_UP = "qpUp",
    DROP_UP = "dropUp",
    FRIEND_POINT_UP = "friendPointUp",
    EVENT_DROP_UP = "eventDropUp",
    EVENT_DROP_RATE_UP = "eventDropRateUp",
    EVENT_POINT_UP = "eventPointUp",
    EVENT_POINT_RATE_UP = "eventPointRateUp",
    TRANSFORM_SERVANT = "transformServant",
    QP_DROP_UP = "qpDropUp",
    SERVANT_FRIENDSHIP_UP = "servantFriendshipUp",
    USER_EQUIP_EXP_UP = "userEquipExpUp",
    CLASS_DROP_UP = "classDropUp",
    ENEMY_ENCOUNT_COPY_RATE_UP = "enemyEncountCopyRateUp",
    ENEMY_ENCOUNT_RATE_UP = "enemyEncountRateUp",
    ENEMY_PROB_DOWN = "enemyProbDown",
    GET_REWARD_GIFT = "getRewardGift",
    SEND_SUPPORT_FRIEND_POINT = "sendSupportFriendPoint",
    MOVE_POSITION = "movePosition",
    REVIVAL = "revival",
    DAMAGE_NP_INDIVIDUAL_SUM = "damageNpIndividualSum",
}

export default FuncType;
