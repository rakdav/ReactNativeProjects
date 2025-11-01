import React, {JSX, useState} from "react";
import {StyleSheet, Text, View,TouchableOpacity,ScrollView,Alert,KeyboardAvoidingView,Platform} from 'react-native';
import {ShapeType,Dimensions,CalculationHistory} from "./types";
import {shapeConfigs} from "./shapeConfig";
import {ShapeButton} from "./components/ShapeButton";
import {InputField} from "./components/InputField";
import {HistoryItem} from "./components/HistoryItem";

export default function App(){
  const [shape, setShape] = React.useState<ShapeType>('rectangle');
  const [dimensions, setDimensions] = React.useState<Dimensions>({
    length:'',
    width:'',
    radius:''
  });
  const [area,setArea]=useState<number|null>(null);
  const [history, setHistory] = React.useState<CalculationHistory[]>([]);
  const calculateArea=():void=>{
      const config=shapeConfigs[shape];
      let calculatedArea=0;
      let calculation=''
      try
      {
        switch (shape){
          case 'rectangle':
            if(!dimensions.width||!dimensions.length){
              throw new Error("Введите длину и ширину")
            }
            calculatedArea=parseFloat(dimensions.width)*parseFloat(dimensions.length);
            calculation=`${dimensions.length}*${dimensions.width}`;
            break;
          case 'circle':
              if(!dimensions.radius){
                  throw new Error("Введите радиус")
              }
              calculatedArea=Math.pow(parseFloat(dimensions.radius),2)*Math.PI;
              calculation=`${Math.PI}*${dimensions.radius}^2`;
            break;
            default:
                throw new Error("Неизвестная фигура")
        }
        if(isNaN(calculatedArea)){
            throw new Error("Некорректные значения")
        }
        const result:CalculationHistory={
            shape:config.name,
            area:calculatedArea.toFixed(2),
            calculation,
            timestamp:new Date().toLocaleTimeString(),
        }
        setArea(calculatedArea)
        setHistory(prev=>[result,...prev.slice(0,9)])
      }
      catch (error){
        Alert.alert('Ошибка',(error as Error).message);
      }
  }
  const clearInputs=():void=>{
      setDimensions({
          length:'',
          width:'',
          radius:''
      });
      setArea(null)
  };
  const clearHistory=()=>{
      setHistory([])
  }
  const handleShapeChange=(newShape:ShapeType)=>{
      setShape(newShape);
      clearInputs();
  }
  const handleDimensionChange=(key:keyof Dimensions,value:string)=>{
      setDimensions(prevState => ({...prevState,[key]:value}));
  }
  const renderInputs=():JSX.Element=>{
      const config=shapeConfigs[shape];
      return (
          <View style={styles.inputGroup}>
              {config.inputs.map((input)=>(
               <InputField
                   key={input.key}
                   placeholderText={input.placeholder}
                   value={dimensions[input.key]}
                   label={input.label}
                   onChangeText={(text)=>handleDimensionChange(input.key,text)}/>
              ))}
          </View>
      )
  }
  const currentConfig=shapeConfigs[shape];
  return (
      <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === 'ios'?'padding':'height'}>
          <ScrollView style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
              <Text style={styles.title}>Калькулятор площади</Text>
              <View style={styles.shapeSelector}>
                  <Text style={styles.sectionTitle}>Выберите фигуру</Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}
                  style={styles.shapeScroll}>
                      {(Object.keys(shapeConfigs) as ShapeType[]).map((shapeType)=>(
                         <ShapeButton
                             key={shapeType}
                             shape={shapeConfigs[shapeType].name}
                             isActive={shape==shapeType}
                         onPress={()=>handleShapeChange(shapeType)}/>
                      ))}
                  </ScrollView>
                  <View style={styles.formulaSection}>
                      <Text style={styles.formulaLabel}>Формула</Text>
                      <Text style={styles.formulaText}>{currentConfig.formula}</Text>
                  </View>
                  <View style={styles.inputSection}>
                      <Text style={styles.sectionTitle}>Параметры</Text>
                      {renderInputs()}
                  </View>
                  <View style={styles.buttonGroup}>
                      <TouchableOpacity style={styles.calculateButton}
                                        onPress={calculateArea}>
                          <Text style={styles.calculateButtonText}>Рассчитать</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.clearButton}
                                        onPress={clearInputs}>
                          <Text style={styles.clearButtonText}>Очистить</Text>
                      </TouchableOpacity>
                  </View>
                  {area!==null&&(
                      <View style={styles.resultSection}>
                          <Text style={styles.resultTitle}>Результат:</Text>
                          <Text style={styles.areaText}>Площадь:{area.toFixed(2)}</Text>
                          <Text style={styles.shapeName}>{currentConfig.name}</Text>
                      </View>
                  )}
                  {history.length>0&&(
                      <View style={styles.historySection}>
                          <View style={styles.historyHeader}>
                              <Text style={styles.sectionTitle}>История расчетов</Text>
                              <TouchableOpacity onPress={clearHistory}>
                                  <Text style={styles.clearHistoryText}>Очистить</Text>
                              </TouchableOpacity>
                          </View>
                          {history.map((item,index)=>(
                              <HistoryItem item={item} key={index}/>
                          ))}
                      </View>
                  )}
              </View>
          </ScrollView>
      </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#f5f5ff5"
    },
    scrollView:{
        flex:1,
        padding:20,
        paddingTop:60
    },
    title:{
        fontSize:28,
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:30,
        color:'#333',
    },
    sectionTitle:{
        fontSize:18,
        fontWeight:"600",
        marginBottom:15,
        color:'#444',
    },
    shapeSelector:{
        marginBottom:25,
    },
    shapeScroll:{
      marginHorizontal:-5
    },
    formulaSection:{
      backgroundColor:"#fff",
      padding:15,
      borderRadius:10,
      marginBottom:25,
      borderLeftWidth:4,
      borderLeftColor:"FF9500"
    },
    formulaLabel:{
        fontSize:14,
        fontWeight:"600",
        color:'#666',
        marginBottom:5
    },
    formulaText:{
        fontSize:16,
        fontWeight:"600",
        color:'#FF9500',
        fontStyle:'italic',
    },
    inputSection: {
        marginBottom: 25,
    },
    inputGroup: {
        gap: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 25,
    },
    calculateButton: {
        flex: 2,
        backgroundColor: '#007AFF',
        padding: 18,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#007AFF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    calculateButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    clearButton: {
        flex: 1,
        backgroundColor: '#ff3b30',
        padding: 18,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#ff3b30',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    clearButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    resultSection: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        borderLeftWidth: 4,
        borderLeftColor: '#34C759',
        marginBottom: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    resultTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        color: '#666',
    },
    areaText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#34C759',
        marginBottom: 5,
    },
    shapeName: {
        fontSize: 16,
        color: '#666',
        fontStyle: 'italic',
    },
    historySection: {
        marginBottom: 25,
    },
    historyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    clearHistoryText: {
        color: '#ff3b30',
        fontSize: 14,
        fontWeight: '500',
    }
})