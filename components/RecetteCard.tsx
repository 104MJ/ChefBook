import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Recette } from "../types/recette";

type RecetteCardProps = {
    recette: Recette;
    onPress?: () => void;
};

const RecetteCard: React.FC<RecetteCardProps> = ({ recette, onPress }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        const newStatus = !isFavorite;
        setIsFavorite(newStatus);

        if (newStatus) {
            Alert.alert(
                "Succès",
                `${recette.title} a été ajouté aux favoris`,
                [{ text: "Compris", style: "default" }]
            );
        }
    };

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: recette.image }} style={styles.image} resizeMode="cover" />
            <View style={styles.info}>
                <Text style={styles.title}>{recette.title}</Text>
                <View style={styles.headerRow}>
                    <Text style={styles.title}>{recette.title}</Text>
                    <TouchableOpacity onPress={toggleFavorite}>
                        <Text style={{ fontSize: 20, marginLeft: 10 }}>
                            {isFavorite ? "❤️" : "🤍"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <Text style={styles.details}>⏱ {recette.temps_preparation}</Text>
                    <Text style={[styles.details, styles.difficulty]}> • {recette.difficulte}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        margin: 10,
        overflow: "hidden",
        elevation: 2,
    },
    image: {
        width: "100%",
        height: 150,
    },
    info: {
        padding: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    details: {
        color: "#555",
        fontSize: 14,
    },
    difficulty: {
        fontWeight: "bold",
        color: "#888",
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export default RecetteCard;